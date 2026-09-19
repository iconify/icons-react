import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x-gq9nbgd.css';
import '../../css/y/ywx_kcbic.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x-gq9nbgd"/><path class="ywx_kcbic"/></g>`,
		"fallback": "fluent-emoji-high-contrast:right-facing-fist",
	});
}

export default Component;
