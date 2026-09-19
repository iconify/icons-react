import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/umiew1fte.css';
import '../../css/z/zr64ovb5b.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="umiew1fte"/><path class="zr64ovb5b"/></g>`,
		"fallback": "glyphs:microscope-duo",
	});
}

export default Component;
