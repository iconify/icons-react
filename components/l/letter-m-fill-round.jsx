import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oly0nib0u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oly0nib0u"/>`,
		"fallback": "coolicons:letter-m-fill-round",
	});
}

export default Component;
