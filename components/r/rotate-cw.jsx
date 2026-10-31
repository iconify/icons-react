import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/y/yfymn2bvd.css';
import '../../css/k/katsrfgrc.css';
import '../../css/f/fstd__hjr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGPudV1QfJ" x1="9.01" x2="15.01" y1="1.51" y2="21.86" gradientUnits="userSpaceOnUse"><stop offset="0" class="fqk8mibcy"/><stop offset="1" class="yfymn2bvd"/></linearGradient></defs><path fill="url(#SVGPudV1QfJ)" class="katsrfgrc"/><path class="fstd__hjr wm-shine"/></g>`,
		"fallback": "withicons-utsav:rotate-cw",
	});
}

export default Component;
