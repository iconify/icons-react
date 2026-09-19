import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rouiqnbvi.css';
import '../../css/l/lxa7bxwkb.css';

const viewBox = {"width":32,"height":33};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rouiqnbvi"/><path class="lxa7bxwkb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:keycap-5",
	});
}

export default Component;
