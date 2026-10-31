import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n1l8qxbqv.css';
import '../../css/t/th4wtm1vr.css';
import '../../css/n/nswfuzbgk.css';
import '../../css/y/yoo-qubgm.css';
import '../../css/u/ux9cuqbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n1l8qxbqv wm-shadow"/><path class="th4wtm1vr wm-shadow"/><path class="nswfuzbgk"/><path class="yoo-qubgm"/><path class="ux9cuqbef"/></g>`,
		"fallback": "withicons-brutal:ungroup",
	});
}

export default Component;
