import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rb5xdvc0s.css';
import '../../css/b/bkqbhrlym.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rb5xdvc0s"/><path class="bkqbhrlym"/></g>`,
		"fallback": "fluent-emoji-high-contrast:japanese-no-vacancy-button",
	});
}

export default Component;
