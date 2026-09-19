import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjor2ptwt.css';
import '../../css/f/fvlvak2nk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qjor2ptwt"/><path class="fvlvak2nk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tumbler-glass",
	});
}

export default Component;
