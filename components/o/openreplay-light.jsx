import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/as3pgvova.css';
import '../../css/g/gcjjsc2cx.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="as3pgvova"/><path class="gcjjsc2cx"/></g>`,
		"fallback": "thesvg-color:openreplay-light",
	});
}

export default Component;
