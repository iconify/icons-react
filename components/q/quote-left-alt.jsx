import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf-51cbmo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sf-51cbmo"/>`,
		"fallback": "boxicons:quote-left-alt",
	});
}

export default Component;
