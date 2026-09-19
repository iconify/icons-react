import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yljvlcm9c.css';
import '../../css/m/mi58zrbsp.css';
import '../../css/k/kvf1k6b_t.css';
import '../../css/l/la-lxablh.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yljvlcm9c"/><path class="mi58zrbsp"/><path class="kvf1k6b_t"/><path class="la-lxablh"/></g>`,
		"fallback": "glyphs-poly:volume-mute",
	});
}

export default Component;
