import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5joc9bko.css';
import '../../css/b/bz9w1bq-y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a5joc9bko"/><path class="bz9w1bq-y"/></g>`,
		"fallback": "fluent-emoji-high-contrast:love-letter",
	});
}

export default Component;
