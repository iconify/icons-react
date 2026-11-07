import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w4-05cc6z.css';
import '../../css/s/s-ypsc2gv.css';
import '../../css/l/leur-h8bg.css';
import '../../css/d/dlgm9h3nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="w4-05cc6z"/><path class="s-ypsc2gv"/><path class="leur-h8bg"/><path class="dlgm9h3nj"/></g>`,
		"fallback": "solar:palette-round-linear",
	});
}

export default Component;
