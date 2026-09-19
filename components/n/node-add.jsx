import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/tnigo-8vb.css';
import '../../css/b/b7rjdgn0s.css';
import '../../css/y/y0889gbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="tnigo-8vb"/><path class="b7rjdgn0s"/><path class="y0889gbgc"/></g>`,
		"fallback": "hugeicons:node-add",
	});
}

export default Component;
