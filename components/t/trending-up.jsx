import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wvxdzs2cd.css';
import '../../css/u/upu8ebcyp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wvxdzs2cd"/><path class="upu8ebcyp"/></g>`,
		"fallback": "codex:trending-up",
	});
}

export default Component;
