import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/guj5ndblb.css';
import '../../css/f/fd641zcer.css';
import '../../css/d/dqh2e367l.css';
import '../../css/u/ujrmgmblc.css';
import '../../css/o/obcs1cbgf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="guj5ndblb"/><path class="fd641zcer"/><path class="dqh2e367l"/><path class="ujrmgmblc"/><path class="obcs1cbgf"/></g>`,
		"fallback": "solar:microphone-3-linear",
	});
}

export default Component;
