import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pv6pnyb6o.css';
import '../../css/k/kgn4sjj3u.css';
import '../../css/y/yzzxj8nmu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="pv6pnyb6o"/><path class="kgn4sjj3u"/><path class="yzzxj8nmu"/></g>`,
		"fallback": "hugeicons:invoice",
	});
}

export default Component;
