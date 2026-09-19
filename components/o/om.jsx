import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wkmx0ib4y.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/n/n65wabb9x.css';
import '../../css/r/r-xqwdb9x.css';
import '../../css/w/w6tn5kfnd.css';
import '../../css/j/j8jrkfbgw.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wkmx0ib4y"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="n65wabb9x"/><path clip-rule="evenodd" class="r-xqwdb9x"/><path class="w6tn5kfnd"/><path clip-rule="evenodd" class="j8jrkfbgw"/></g></g>`,
		"fallback": "flagpack:om",
	});
}

export default Component;
