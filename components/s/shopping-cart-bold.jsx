import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/moy9m_k7d.css';
import '../../css/g/glv0eejpa.css';
import '../../css/u/uo28wmy_e.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="moy9m_k7d"/><path class="glv0eejpa"/><path class="uo28wmy_e"/></g>`,
		"fallback": "glyphs:shopping-cart-bold",
	});
}

export default Component;
