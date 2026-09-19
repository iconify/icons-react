import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fkijn4jux.css';
import '../../css/d/dppta002c.css';
import '../../css/w/wr28_ubwm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fkijn4jux"/><path class="dppta002c"/><path class="wr28_ubwm"/></g>`,
		"fallback": "hugeicons:square-lock-minus-02",
	});
}

export default Component;
