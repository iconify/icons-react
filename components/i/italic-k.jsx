import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zrailb4ig.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zrailb4ig"/>`,
		"fallback": "ooui:italic-k",
	});
}

export default Component;
