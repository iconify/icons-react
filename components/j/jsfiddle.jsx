import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn6dd5bao.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn6dd5bao"/>`,
		"fallback": "cib:jsfiddle",
	});
}

export default Component;
