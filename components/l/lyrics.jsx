import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oioaupb_p.css';
import '../../css/g/gc22lab6j.css';
import '../../css/r/rvzo3zb_c.css';
import '../../css/q/q4wdhbb9t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="oioaupb_p"/><path class="gc22lab6j"/><path class="rvzo3zb_c"/><path class="q4wdhbb9t"/></g>`,
		"fallback": "andrsrxn:lyrics",
	});
}

export default Component;
