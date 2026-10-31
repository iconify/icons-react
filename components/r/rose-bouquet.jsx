import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/z/z87oii3bg.css';
import '../../css/u/u5g5qacse.css';
import '../../css/f/fqig41bff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG3IzsuKCx" x1="9" x2="15" y1="1" y2="22.75" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG3IzsuKCx)" class="z87oii3bg"/><path class="u5g5qacse wm-a"/><path class="fqig41bff wm-shine"/></g>`,
		"fallback": "withicons-utsav:rose-bouquet",
	});
}

export default Component;
