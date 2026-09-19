import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c51qytnhj.css';
import '../../css/b/b9-uj5b-x.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c51qytnhj"/><path class="b9-uj5b-x"/></g>`,
		"fallback": "glyphs:microphone-slash-bold",
	});
}

export default Component;
