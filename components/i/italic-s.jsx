import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/orha0ukvp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="orha0ukvp"/>`,
		"fallback": "ooui:italic-s",
	});
}

export default Component;
