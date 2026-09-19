import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f13-t_k2z.css';
import '../../css/m/mrlfgcc7o.css';
import '../../css/h/hh0wagbud.css';
import '../../css/g/g9a9qdbre.css';
import '../../css/c/chcnzw_nt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f13-t_k2z"/><path clip-rule="evenodd" class="mrlfgcc7o"/><path class="hh0wagbud"/><path class="g9a9qdbre"/><path class="chcnzw_nt"/></g>`,
		"fallback": "glyphs:king-bold",
	});
}

export default Component;
