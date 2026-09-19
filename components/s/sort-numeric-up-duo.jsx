import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z11jh8d7u.css';
import '../../css/z/z1pqanbny.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z11jh8d7u"/><path class="z1pqanbny"/></g>`,
		"fallback": "glyphs:sort-numeric-up-duo",
	});
}

export default Component;
