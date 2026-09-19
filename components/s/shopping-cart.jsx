import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/f/fhn_jab4y.css';
import '../../css/p/p1_p-fbww.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="fhn_jab4y"/><path class="p1_p-fbww"/></g>`,
		"fallback": "glyphs:shopping-cart",
	});
}

export default Component;
