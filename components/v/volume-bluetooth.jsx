import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpbbsy__d.css';
import '../../css/a/atjababum.css';
import '../../css/j/jjpn79blb.css';
import '../../css/c/cr7w9mtqb.css';
import '../../css/m/mfi_eacmq.css';
import '../../css/p/pfkto6bvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gpbbsy__d"/><path class="atjababum"/><path class="jjpn79blb"/><path class="cr7w9mtqb"/><path class="mfi_eacmq"/><path class="pfkto6bvt"/></g>`,
		"fallback": "andrsrxn:volume-bluetooth",
	});
}

export default Component;
