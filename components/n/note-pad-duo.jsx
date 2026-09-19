import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ann6c0mbl.css';
import '../../css/m/moadgq8yd.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ann6c0mbl"/><path class="moadgq8yd"/></g>`,
		"fallback": "glyphs:note-pad-duo",
	});
}

export default Component;
