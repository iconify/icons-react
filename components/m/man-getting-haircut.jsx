import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kwb1h1bte.css';
import '../../css/r/r_mg9bczp.css';
import '../../css/f/ft7t9cudy.css';
import '../../css/t/tknbxxn2s.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kwb1h1bte"/><path class="r_mg9bczp"/><path class="ft7t9cudy"/><path class="tknbxxn2s"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-getting-haircut",
	});
}

export default Component;
