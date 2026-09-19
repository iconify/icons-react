import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l9sfnjb3h.css';
import '../../css/g/g1z6xhtcj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l9sfnjb3h"/><path class="g1z6xhtcj"/></g>`,
		"fallback": "glyphs:microphone-bold",
	});
}

export default Component;
