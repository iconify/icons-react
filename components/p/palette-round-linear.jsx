import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kebp8vbig.css';
import '../../css/u/ui8u4ns2y.css';
import '../../css/a/axz1i1r4g.css';
import '../../css/d/dlgm9h3nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kebp8vbig"/><path class="ui8u4ns2y"/><path class="axz1i1r4g"/><path class="dlgm9h3nj"/></g>`,
		"fallback": "solar:palette-round-linear",
	});
}

export default Component;
