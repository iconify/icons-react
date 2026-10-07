import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cmhb2q1wl.css';
import '../../css/l/lsg8msbeo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cmhb2q1wl"/><path class="lsg8msbeo"/></g>`,
		"fallback": "wordpress:justify-space-between",
	});
}

export default Component;
