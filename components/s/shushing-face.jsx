import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/btmf4qbac.css';
import '../../css/g/g1jm2-u3o.css';
import '../../css/q/qe_omjbhd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="btmf4qbac"/><path class="g1jm2-u3o"/><path class="qe_omjbhd"/></g>`,
		"fallback": "fluent-emoji-high-contrast:shushing-face",
	});
}

export default Component;
