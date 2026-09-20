import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tr3t0n5cs.css';
import '../../css/k/k7rwpu99c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tr3t0n5cs"/><path class="k7rwpu99c"/></g>`,
		"fallback": "reicon:time-back-filled",
	});
}

export default Component;
