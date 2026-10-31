import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/u/uk_3br34n.css';
import '../../css/q/qxgpidbef.css';
import '../../css/n/njm4b5b7l.css';
import '../../css/b/bkczg5f9w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPpW2Cbkh" x1="9" x2="15" y1="4" y2="20" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGPpW2Cbkh)" class="uk_3br34n"/><path class="qxgpidbef wm-shine"/><path class="njm4b5b7l wm-shine"/><path class="bkczg5f9w wm-shine"/></g>`,
		"fallback": "withicons-utsav:ticket-percent",
	});
}

export default Component;
