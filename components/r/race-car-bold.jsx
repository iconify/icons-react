import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/ve3z1lb2g.css';
import '../../css/l/lxg7su77s.css';
import '../../css/p/p3mukqotj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ve3z1lb2g"/><path clip-rule="evenodd" class="lxg7su77s"/><path class="p3mukqotj"/></g>`,
		"fallback": "glyphs:race-car-bold",
	});
}

export default Component;
