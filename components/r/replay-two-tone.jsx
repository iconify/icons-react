import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jefko1b_v.css';
import '../../css/h/hhuu0x9cj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jefko1b_v"/><path class="hhuu0x9cj"/></g>`,
		"fallback": "keyline-icons:replay-two-tone",
	});
}

export default Component;
