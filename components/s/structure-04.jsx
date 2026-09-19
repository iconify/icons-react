import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/we8_5pd4y.css';
import '../../css/r/r0j9gsn7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="we8_5pd4y"/><path class="r0j9gsn7c"/></g>`,
		"fallback": "hugeicons:structure-04",
	});
}

export default Component;
