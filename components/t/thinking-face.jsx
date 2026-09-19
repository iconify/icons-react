import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/my0_g5bac.css';
import '../../css/t/t7cusdu_d.css';
import '../../css/a/acm8xxbrc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="my0_g5bac"/><path class="t7cusdu_d"/><path class="acm8xxbrc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:thinking-face",
	});
}

export default Component;
