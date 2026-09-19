import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l60ko1b5p.css';
import '../../css/b/bodpbpkvz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l60ko1b5p"/><path class="bodpbpkvz"/></g>`,
		"fallback": "glyphs:spinner-1-duo",
	});
}

export default Component;
