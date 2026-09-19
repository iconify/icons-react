import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_8erebfm.css';
import '../../css/m/mw8_4fc7e.css';
import '../../css/s/sd5kuwbgo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y_8erebfm"/><path class="mw8_4fc7e"/><path class="sd5kuwbgo"/></g>`,
		"fallback": "et:key",
	});
}

export default Component;
