import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/a/a4y7rqb1n.css';
import '../../css/e/e6qicfbfp.css';
import '../../css/f/ftyot39ay.css';
import '../../css/k/kz0_pvboy.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="a4y7rqb1n"/><path class="e6qicfbfp"/><path class="ftyot39ay"/><path class="kz0_pvboy"/></g>`,
		"fallback": "glyphs:record-outline",
	});
}

export default Component;
