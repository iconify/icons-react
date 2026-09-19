import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bp_2iobgl.css';
import '../../css/k/kzjajhnct.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bp_2iobgl"/><path class="kzjajhnct"/></g>`,
		"fallback": "glyphs:sd-card-duo",
	});
}

export default Component;
