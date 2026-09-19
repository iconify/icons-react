import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y8ovkkbdl.css';
import '../../css/i/i9fk3vbkl.css';
import '../../css/n/ndirhzcpc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="y8ovkkbdl"/><path class="i9fk3vbkl"/><path class="ndirhzcpc"/></g>`,
		"fallback": "glyphs:snow-duo",
	});
}

export default Component;
