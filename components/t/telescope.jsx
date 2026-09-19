import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/ta0p39h7x.css';
import '../../css/f/f4-w8obyt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ta0p39h7x"/><path class="f4-w8obyt"/></g>`,
		"fallback": "akar-icons:telescope",
	});
}

export default Component;
