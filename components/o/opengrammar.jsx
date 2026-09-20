import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz0dcbb8n.css';
import '../../css/z/z-wj5t2su.css';
import '../../css/m/m-4_v9njk.css';
import '../../css/u/ukmf64bsz.css';
import '../../css/w/wmdfw1blo.css';
import '../../css/j/j80i0mb2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<linearGradient id="SVGlvkYYbcg" x1="-701.627" x2="-700.627" y1="796.447" y2="795.447" gradientTransform="matrix(512 0 0 -512 359233 407781)" gradientUnits="userSpaceOnUse"><stop offset="0" class="oz0dcbb8n"/><stop offset="1" class="z-wj5t2su"/></linearGradient><path fill="url(#SVGlvkYYbcg)" class="m-4_v9njk"/><path class="ukmf64bsz"/><path class="wmdfw1blo"/><path class="j80i0mb2x"/>`,
		"fallback": "selfhst:opengrammar",
	});
}

export default Component;
