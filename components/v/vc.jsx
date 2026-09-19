import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wdsj_4jyn.css';
import '../../css/n/ne796rdww.css';
import '../../css/w/w7h_dwbxa.css';

const viewBox = {"width":301,"height":201};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wdsj_4jyn"/><path class="ne796rdww"/><path class="w7h_dwbxa"/></g>`,
		"fallback": "cif:vc",
	});
}

export default Component;
