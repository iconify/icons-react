import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/r/rcndx4bkj.css';
import '../../css/r/r79qmwbfo.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="rcndx4bkj"/><path class="r79qmwbfo"/></g>`,
		"fallback": "glyphs:shopping-cart-1",
	});
}

export default Component;
