import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/trpzqny1k.css';
import '../../css/v/v08y7ubux.css';
import '../../css/n/nd_0q65lq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="trpzqny1k"/><path clip-rule="evenodd" class="v08y7ubux"/><path class="nd_0q65lq"/></g>`,
		"fallback": "glyphs:speedometer-3-outline",
	});
}

export default Component;
