import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w2ue3b82k.css';
import '../../css/m/mwnf04hgc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w2ue3b82k"/><path class="mwnf04hgc"/></g>`,
		"fallback": "glyphs-poly:waves-1",
	});
}

export default Component;
