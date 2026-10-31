import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/z-t4tsrum.css';
import '../../css/o/ohjcgoxvw.css';
import '../../css/a/a56mk3btm.css';
import '../../css/q/qeaz4ib7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGXs9Ipb1D" x1="9.26" x2="15.26" y1="1.51" y2="22" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGXs9Ipb1D)" class="z-t4tsrum"/><path class="ohjcgoxvw wm-a"/><path class="a56mk3btm wm-s"/><path class="qeaz4ib7b wm-shine"/></g>`,
		"fallback": "withicons-utsav:party-popper",
	});
}

export default Component;
