import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jrektlbrg.css';
import '../../css/z/zg8ve_6gr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jrektlbrg"/><path class="zg8ve_6gr"/></g>`,
		"fallback": "glyphs:satellite-dish-duo",
	});
}

export default Component;
