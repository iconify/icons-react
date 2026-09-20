import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ioe397phc.css';
import '../../css/g/gonv8_bau.css';
import '../../css/s/si_mtzbvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ioe397phc"/><path class="gonv8_bau"/><path class="si_mtzbvj"/></g>`,
		"fallback": "solar:notebook-square-broken",
	});
}

export default Component;
