import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kjge8mbtk.css';
import '../../css/h/hrktfybgc.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kjge8mbtk"/><path class="hrktfybgc"/></g>`,
		"fallback": "glyphs:ruler-duo",
	});
}

export default Component;
