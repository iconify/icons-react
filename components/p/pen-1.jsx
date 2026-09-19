import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lum00wbsm.css';
import '../../css/d/d07l4yz5d.css';
import '../../css/b/b-uqsybpr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="lum00wbsm"/><path class="d07l4yz5d"/><path class="b-uqsybpr"/></g>`,
		"fallback": "glyphs-poly:pen-1",
	});
}

export default Component;
