import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j7cqu14cb.css';
import '../../css/c/czgf4idyq.css';
import '../../css/o/ou550aflz.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j7cqu14cb"/><path class="czgf4idyq"/><path class="ou550aflz"/></g>`,
		"fallback": "glyphs:square-half-1-duo",
	});
}

export default Component;
