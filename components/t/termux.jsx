import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j1z-x8bgg.css';
import '../../css/d/da4op8ghx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j1z-x8bgg"/><path class="da4op8ghx"/></g>`,
		"fallback": "thesvg-color:termux",
	});
}

export default Component;
