import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qkjly7bav.css';
import '../../css/d/ds3epib7h.css';
import '../../css/i/imc13j2-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="qkjly7bav"/><path class="ds3epib7h"/><path class="imc13j2-y"/></g>`,
		"fallback": "hugeicons:noodles",
	});
}

export default Component;
