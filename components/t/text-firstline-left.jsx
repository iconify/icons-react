import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dcy77s23i.css';
import '../../css/j/jecgoz4ei.css';
import '../../css/t/tx4-hdqju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="dcy77s23i"/><rect class="jecgoz4ei"/><path class="tx4-hdqju"/></g>`,
		"fallback": "andrsrxn:text-firstline-left",
	});
}

export default Component;
