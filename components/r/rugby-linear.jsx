import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ow8f72nes.css';
import '../../css/r/rlmjigbjv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ow8f72nes"/><path class="rlmjigbjv"/></g>`,
		"fallback": "solar:rugby-linear",
	});
}

export default Component;
