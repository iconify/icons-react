import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h9xiawb3b.css';
import '../../css/t/tkzhsyb5o.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h9xiawb3b"/><path clip-rule="evenodd" class="tkzhsyb5o"/></g>`,
		"fallback": "glyphs:star-half-1-bold",
	});
}

export default Component;
