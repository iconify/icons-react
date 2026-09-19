import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l38r64boy.css';
import '../../css/h/hctwaybfr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l38r64boy"/><path class="hctwaybfr"/></g>`,
		"fallback": "fluent-emoji-high-contrast:video-game",
	});
}

export default Component;
