import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mpjsytqjw.css';
import '../../css/l/lu3chvbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="mpjsytqjw"/><path class="lu3chvbgc"/></g>`,
		"fallback": "keyline-icons:mail-duotone",
	});
}

export default Component;
