import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rpbfbgm3p.css';
import '../../css/d/d27yprn4f.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="rpbfbgm3p"/><path class="d27yprn4f"/></g>`,
		"fallback": "glyphs-poly:mouse-1",
	});
}

export default Component;
