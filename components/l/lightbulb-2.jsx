import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f3wxftbjs.css';
import '../../css/i/ipu91p9hu.css';
import '../../css/d/d-6krk_4l.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f3wxftbjs"/><path clip-rule="evenodd" class="ipu91p9hu"/><path class="d-6krk_4l"/></g>`,
		"fallback": "glyphs-poly:lightbulb-2",
	});
}

export default Component;
