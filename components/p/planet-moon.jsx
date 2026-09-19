import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8eoimbpp.css';
import '../../css/f/fycg7vbuo.css';
import '../../css/d/d4u2wrb4d.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8eoimbpp"/><path clip-rule="evenodd" class="fycg7vbuo"/><circle class="d4u2wrb4d"/></g>`,
		"fallback": "glyphs-poly:planet-moon",
	});
}

export default Component;
