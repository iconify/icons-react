import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qj0v1n2bu.css';
import '../../css/j/jlbcj-bkn.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="qj0v1n2bu"/><path clip-rule="evenodd" class="jlbcj-bkn"/></g>`,
		"fallback": "glyphs-poly:video",
	});
}

export default Component;
