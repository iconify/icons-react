import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jwclepbql.css';
import '../../css/y/yh1nqihsf.css';
import '../../css/m/mxs3jyekp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jwclepbql"/><path class="yh1nqihsf"/><path clip-rule="evenodd" class="mxs3jyekp"/></g>`,
		"fallback": "pepicons-pencil:music-note-single",
	});
}

export default Component;
