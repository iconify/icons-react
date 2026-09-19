import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qfefv7bzr.css';
import '../../css/d/ddrm_0bvl.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qfefv7bzr"/><path class="ddrm_0bvl"/></g>`,
		"fallback": "glyphs:page-break-bold",
	});
}

export default Component;
