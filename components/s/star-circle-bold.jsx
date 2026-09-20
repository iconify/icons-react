import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/apl9sq3xl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="apl9sq3xl"/>`,
		"fallback": "solar:star-circle-bold",
	});
}

export default Component;
