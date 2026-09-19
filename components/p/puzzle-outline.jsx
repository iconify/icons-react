import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ooin94b2q.css';
import '../../css/e/etmqdqbpi.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ooin94b2q"/><path class="etmqdqbpi"/></g>`,
		"fallback": "glyphs:puzzle-outline",
	});
}

export default Component;
