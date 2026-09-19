import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jv4k-10ho.css';
import '../../css/p/pnbbm9bfl.css';
import '../../css/u/u819g2d_r.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jv4k-10ho"/><path class="pnbbm9bfl"/><path class="u819g2d_r"/></g>`,
		"fallback": "glyphs-poly:target",
	});
}

export default Component;
