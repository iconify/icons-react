import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/fkpmv0bwm.css';
import '../../css/v/vrcpdj3pt.css';
import '../../css/p/p5xrhsb5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="fkpmv0bwm"/><path class="vrcpdj3pt"/><path class="p5xrhsb5w"/></g>`,
		"fallback": "hugeicons:mail-validation-01",
	});
}

export default Component;
