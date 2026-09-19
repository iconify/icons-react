import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/l3ix8-b0t.css';
import '../../css/e/e29jjxv7l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="l3ix8-b0t"/><path class="e29jjxv7l"/></g>`,
		"fallback": "hugeicons:mouse-left-click-03",
	});
}

export default Component;
