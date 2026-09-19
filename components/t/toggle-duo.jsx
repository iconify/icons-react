import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z19unwb7b.css';
import '../../css/e/e32c4qbbt.css';
import '../../css/u/u-jiawfxg.css';
import '../../css/d/d90c-y1wv.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z19unwb7b"/><path class="e32c4qbbt"/><path class="u-jiawfxg"/><path class="d90c-y1wv"/></g>`,
		"fallback": "glyphs:toggle-duo",
	});
}

export default Component;
