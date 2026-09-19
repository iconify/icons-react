import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zvl9n7rdn.css';
import '../../css/a/a_dtw8drj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zvl9n7rdn"/><path clip-rule="evenodd" class="a_dtw8drj"/></g>`,
		"fallback": "glyphs:layer-backward-bold",
	});
}

export default Component;
