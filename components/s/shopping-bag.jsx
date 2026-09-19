import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/i/i_t9tw1uj.css';
import '../../css/o/o92l4abnk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="i_t9tw1uj"/><path class="o92l4abnk"/></g>`,
		"fallback": "glyphs-poly:shopping-bag",
	});
}

export default Component;
