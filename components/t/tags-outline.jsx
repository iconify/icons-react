import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l4jz1gwne.css';
import '../../css/m/mszjz-b4f.css';
import '../../css/y/y66jmy99b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l4jz1gwne"/><path clip-rule="evenodd" class="mszjz-b4f"/><path class="y66jmy99b"/></g>`,
		"fallback": "glyphs:tags-outline",
	});
}

export default Component;
