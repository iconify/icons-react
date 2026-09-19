import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/de0_tfb_i.css';
import '../../css/r/rxf-1n0xe.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="de0_tfb_i"/><path class="rxf-1n0xe"/></g>`,
		"fallback": "fluent-emoji-high-contrast:notebook",
	});
}

export default Component;
