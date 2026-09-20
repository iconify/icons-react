import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vea8iybjt.css';
import '../../css/f/fvun-abzf.css';
import '../../css/c/c_apmbcjm.css';
import '../../css/h/hq35snb1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vea8iybjt"/><path class="fvun-abzf"/><path class="c_apmbcjm"/><path class="hq35snb1x"/></g>`,
		"fallback": "solar:microphone-large-linear",
	});
}

export default Component;
