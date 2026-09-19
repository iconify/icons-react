import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/exu49ew2v.css';
import '../../css/a/a6lgrsbzu.css';
import '../../css/b/bt__prb8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="exu49ew2v"/><path class="a6lgrsbzu"/><path class="bt__prb8x"/></g>`,
		"fallback": "covid:mutation-stronger",
	});
}

export default Component;
