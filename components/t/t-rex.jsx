import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/x8zlp-erl.css';
import '../../css/p/pidlqfwrw.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="x8zlp-erl"/><path class="pidlqfwrw"/></g>`,
		"fallback": "fluent-emoji-high-contrast:t-rex",
	});
}

export default Component;
