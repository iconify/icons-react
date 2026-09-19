import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q_a5zcbnk.css';
import '../../css/d/d_1qnbb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q_a5zcbnk"/><path class="d_1qnbb1b"/></g>`,
		"fallback": "ci:play-circle",
	});
}

export default Component;
