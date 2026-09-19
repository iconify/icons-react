import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yws1wvrcm.css';
import '../../css/n/nc-c2sb6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yws1wvrcm"/><path class="nc-c2sb6b"/></g>`,
		"fallback": "iconoir:switch-on-outline",
	});
}

export default Component;
