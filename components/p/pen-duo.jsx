import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s90gfib_t.css';
import '../../css/y/y2tqzkb2v.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s90gfib_t"/><path class="y2tqzkb2v"/></g>`,
		"fallback": "glyphs:pen-duo",
	});
}

export default Component;
