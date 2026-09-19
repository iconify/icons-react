import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i1yz4_2hl.css';
import '../../css/w/we8-81bww.css';
import '../../css/p/p7bg0ij5t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i1yz4_2hl"/><path class="we8-81bww"/><path class="p7bg0ij5t"/></g>`,
		"fallback": "glyphs:sort-amount-up-bold",
	});
}

export default Component;
