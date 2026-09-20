import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_d1t5cfa.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_d1t5cfa"/>`,
		"fallback": "ooui:italic-arab-keheh-jeem",
	});
}

export default Component;
