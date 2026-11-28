import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0jddxbbq.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l3y24d3cp.css';
import '../../css/l/ltkl8-bml.css';
import '../../css/d/ddyqfljgi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i0jddxbbq secondary"/><g class="dt0cm9dhy primary"><path class="l3y24d3cp"/><path class="ltkl8-bml"/><path class="ddyqfljgi"/></g>`,
		"fallback": "iconaut:wallet-duo",
	});
}

export default Component;
