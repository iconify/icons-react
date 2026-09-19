import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hcg_sb99d.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/l/l9l1aybwd.css';
import '../../css/v/vwkzjhbzn.css';
import '../../css/t/t-8qj8btz.css';
import '../../css/v/vuvgrbc_k.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hcg_sb99d"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g clip-rule="evenodd" mask="url(#SVGcFaS5cXn)" class="d2kvgvbvc"><path class="l9l1aybwd"/><path class="vwkzjhbzn"/><path class="t-8qj8btz"/><path class="vuvgrbc_k"/></g></g>`,
		"fallback": "flagpack:ve",
	});
}

export default Component;
