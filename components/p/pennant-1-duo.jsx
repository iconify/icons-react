import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_4hwulms.css';
import '../../css/w/w8b-ktgaj.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i_4hwulms"/><path class="w8b-ktgaj"/></g>`,
		"fallback": "glyphs:pennant-1-duo",
	});
}

export default Component;
