import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hcg_sb99d.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/r/rkurtopgk.css';
import '../../css/c/c27593ouw.css';
import '../../css/l/l4d7chbhr.css';
import '../../css/t/tc0x87guk.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="hcg_sb99d"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="rkurtopgk"/><path class="c27593ouw"/><path class="l4d7chbhr"/><path clip-rule="evenodd" class="tc0x87guk"/></g></g>`,
		"fallback": "flagpack:sc",
	});
}

export default Component;
