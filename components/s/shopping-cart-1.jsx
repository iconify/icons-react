import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/j8-bju_yg.css';
import '../../css/l/lyvu_j98b.css';
import '../../css/y/y01qu0bsu.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="wwvp95byt"><path class="j8-bju_yg"/><path class="lyvu_j98b"/><path class="y01qu0bsu"/></g>`,
		"fallback": "glyphs-poly:shopping-cart-1",
	});
}

export default Component;
