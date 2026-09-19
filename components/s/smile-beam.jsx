import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuz9bmb9m.css';

const viewBox = {"width":496,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yuz9bmb9m"/>`,
		"fallback": "fa-solid:smile-beam",
	});
}

export default Component;
