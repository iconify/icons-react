import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/htn0afvjj.css';
import '../../css/v/vmue01bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="htn0afvjj"/><path class="vmue01bzw"/></g>`,
		"fallback": "matita:skip-forward",
	});
}

export default Component;
