import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zc432zbwu.css';
import '../../css/u/uh7vh4bve.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="zc432zbwu"/><path class="uh7vh4bve"/></g>`,
		"fallback": "glyphs:volume-1-duo",
	});
}

export default Component;
