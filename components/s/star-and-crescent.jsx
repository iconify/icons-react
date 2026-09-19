import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y2a2hebrw.css';
import '../../css/b/b8f-k7bmf.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="y2a2hebrw"/><path class="b8f-k7bmf"/></g>`,
		"fallback": "glyphs-poly:star-and-crescent",
	});
}

export default Component;
