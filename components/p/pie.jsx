import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/emd8_9bam.css';
import '../../css/b/b4afntvbk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="emd8_9bam"/><path class="b4afntvbk"/></g>`,
		"fallback": "fluent-emoji-high-contrast:pie",
	});
}

export default Component;
