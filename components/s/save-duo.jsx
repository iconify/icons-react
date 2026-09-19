import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lg6-jzvbp.css';
import '../../css/c/c4dh45b-o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lg6-jzvbp"/><path class="c4dh45b-o"/></g>`,
		"fallback": "glyphs:save-duo",
	});
}

export default Component;
