import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/r/rpumdc5pe.css';
import '../../css/h/hmh2vlb0e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="rpumdc5pe"/><path class="hmh2vlb0e"/></g>`,
		"fallback": "matita:power",
	});
}

export default Component;
