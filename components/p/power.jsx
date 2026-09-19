import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/ke9svq_ex.css';
import '../../css/q/q5i_c0b5m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ke9svq_ex"/><path class="q5i_c0b5m"/></g>`,
		"fallback": "glyphs-poly:power",
	});
}

export default Component;
