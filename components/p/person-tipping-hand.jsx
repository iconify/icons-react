import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rw23uxbfk.css';
import '../../css/d/dy1u4_bpm.css';
import '../../css/i/ijbqnrrlq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rw23uxbfk"/><path class="dy1u4_bpm"/><path class="ijbqnrrlq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:person-tipping-hand",
	});
}

export default Component;
