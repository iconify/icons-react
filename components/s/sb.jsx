import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7w95cbsp.css';
import '../../css/n/n4mhsebtw.css';
import '../../css/k/ksr4kkbsm.css';
import '../../css/t/tp8r4_b9y.css';
import '../../css/m/md7y2dbht.css';
import '../../css/o/oqbgl9xpl.css';

const viewBox = {"width":32,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="d7w95cbsp"/><mask id="SVGcFaS5cXn" width="32" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path clip-rule="evenodd" class="n4mhsebtw"/></mask><g mask="url(#SVGcFaS5cXn)"><path clip-rule="evenodd" class="ksr4kkbsm"/><path class="tp8r4_b9y"/><path clip-rule="evenodd" class="md7y2dbht"/><path clip-rule="evenodd" class="oqbgl9xpl"/></g></g>`,
		"fallback": "flagpack:sb",
	});
}

export default Component;
