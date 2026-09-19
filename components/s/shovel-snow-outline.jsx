import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mn8dh16fr.css';
import '../../css/w/w2t2h5o7b.css';
import '../../css/h/hwtm3tbph.css';
import '../../css/d/drkpvp2uz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mn8dh16fr"/><path clip-rule="evenodd" class="w2t2h5o7b"/><path class="hwtm3tbph"/><path clip-rule="evenodd" class="drkpvp2uz"/></g>`,
		"fallback": "glyphs:shovel-snow-outline",
	});
}

export default Component;
