import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nv-a6333b.css';
import '../../css/q/qdwz4_yyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="nv-a6333b"/><path class="qdwz4_yyi"/></g>`,
		"fallback": "iconoir:short-pants-pockets",
	});
}

export default Component;
