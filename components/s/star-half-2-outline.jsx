import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/chhlejbqa.css';
import '../../css/v/vf2bwuuta.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="chhlejbqa"/><path class="vf2bwuuta"/></g>`,
		"fallback": "glyphs:star-half-2-outline",
	});
}

export default Component;
