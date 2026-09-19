import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrhkulg5m.css';

const viewBox = {"width":560,"height":654};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrhkulg5m"/>`,
		"fallback": "ls:o",
	});
}

export default Component;
