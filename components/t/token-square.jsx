import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/q/qykna05dk.css';
import '../../css/a/a6tutdvgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="qykna05dk"/><path class="a6tutdvgx"/></g>`,
		"fallback": "hugeicons:token-square",
	});
}

export default Component;
