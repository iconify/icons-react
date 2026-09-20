import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cpha-lbty.css';
import '../../css/m/mm4-ccc-d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="cpha-lbty"/><path class="mm4-ccc-d"/></g>`,
		"fallback": "keyline-icons:paint-roller-fill",
	});
}

export default Component;
