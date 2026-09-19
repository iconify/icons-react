import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e4chiwvsf.css';
import '../../css/z/zqh_7gguy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="e4chiwvsf"/><path class="zqh_7gguy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:no-littering",
	});
}

export default Component;
