import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/w/w7f1knbar.css';
import '../../css/v/vbhtlsbwa.css';
import '../../css/q/qtktxacxl.css';
import '../../css/p/ptzle3bnr.css';
import '../../css/k/k2hspqbiv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="w7f1knbar"/><path class="vbhtlsbwa"/><path class="qtktxacxl"/><path class="ptzle3bnr"/><path class="k2hspqbiv"/></g>`,
		"fallback": "solar:magic-stick-3-broken",
	});
}

export default Component;
