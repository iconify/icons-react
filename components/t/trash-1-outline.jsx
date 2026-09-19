import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkt0tm_pc.css';
import '../../css/s/swm4sl8ha.css';
import '../../css/o/orier7xvr.css';
import '../../css/o/oqkwxkbed.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nkt0tm_pc"/><path clip-rule="evenodd" class="swm4sl8ha"/><path class="orier7xvr"/><path clip-rule="evenodd" class="oqkwxkbed"/></g>`,
		"fallback": "glyphs:trash-1-outline",
	});
}

export default Component;
