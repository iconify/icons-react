import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yx-huv8gi.css';
import '../../css/n/nc-c2sb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yx-huv8gi"/><path class="nc-c2sb6b"/></g>`,
		"fallback": "iconoir:switch-off-outline",
	});
}

export default Component;
