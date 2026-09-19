import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/u199opbrk.css';
import '../../css/e/e6qicfbfp.css';
import '../../css/j/jh9ozv90b.css';
import '../../css/k/kz0_pvboy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="u199opbrk"/><path class="e6qicfbfp"/><path class="jh9ozv90b"/><path class="kz0_pvboy"/></g>`,
		"fallback": "glyphs:play-circle-outline",
	});
}

export default Component;
