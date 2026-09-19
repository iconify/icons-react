import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qauc5-naj.css';
import '../../css/m/m4qc6k9qt.css';
import '../../css/k/ktk0lz7oj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qauc5-naj"/><path class="m4qc6k9qt"/><path class="ktk0lz7oj"/></g>`,
		"fallback": "glyphs-poly:snow",
	});
}

export default Component;
