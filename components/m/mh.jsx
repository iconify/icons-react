import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7w95cbsp.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/u/u05uhsb1s.css';
import '../../css/a/aqk8rnj3o.css';
import '../../css/j/jmx-hcc_y.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d7w95cbsp"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="u05uhsb1s"/><path class="aqk8rnj3o"/><path class="jmx-hcc_y"/></g></g>`,
		"fallback": "flagpack:mh",
	});
}

export default Component;
