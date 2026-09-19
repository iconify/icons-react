import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gns6qx_4s.css';
import '../../css/u/uv-8ifblj.css';
import '../../css/m/mvu50ub7r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gns6qx_4s"/><path class="uv-8ifblj"/><path class="mvu50ub7r"/></g>`,
		"fallback": "glyphs:sort-numeric-up-bold",
	});
}

export default Component;
