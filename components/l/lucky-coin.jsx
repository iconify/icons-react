import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/j/jsx20lboa.css';
import '../../css/k/k94113bfx.css';
import '../../css/l/ljzhr3fdm.css';
import '../../css/o/oms0dfb1d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVG9Rd0vb7z" x1="9" x2="15" y1="1.5" y2="22.5" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVG9Rd0vb7z)" class="jsx20lboa"/><path class="k94113bfx wm-shine"/><path class="ljzhr3fdm wm-shine"/><path class="oms0dfb1d wm-shine"/></g>`,
		"fallback": "withicons-utsav:lucky-coin",
	});
}

export default Component;
