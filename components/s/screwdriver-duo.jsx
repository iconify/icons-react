import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8az6pp1j.css';
import '../../css/c/cj0hxubnx.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8az6pp1j"/><path class="cj0hxubnx"/></g>`,
		"fallback": "glyphs:screwdriver-duo",
	});
}

export default Component;
