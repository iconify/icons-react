import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/q/qbk21khiq.css';
import '../../css/q/qk5d7t1_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGag8vbbhF" x1="9.75" x2="15.75" y1="2" y2="19.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGag8vbbhF)" class="qbk21khiq"/><path class="qk5d7t1_k wm-shine"/></g>`,
		"fallback": "withicons-utsav:regex",
	});
}

export default Component;
