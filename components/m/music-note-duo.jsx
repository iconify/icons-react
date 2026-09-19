import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdooqtb6s.css';
import '../../css/y/y41j8mb3t.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zdooqtb6s"/><path class="y41j8mb3t"/></g>`,
		"fallback": "glyphs:music-note-duo",
	});
}

export default Component;
