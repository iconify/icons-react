import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh5q-1lmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh5q-1lmd"/>`,
		"fallback": "ooui:upload",
	});
}

export default Component;
