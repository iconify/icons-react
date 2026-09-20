import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q5t5vobvp.css';
import '../../css/u/u8eyx3_mz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q5t5vobvp"/><path class="u8eyx3_mz"/></g>`,
		"fallback": "keyline-icons:paper-bag-two-tone",
	});
}

export default Component;
