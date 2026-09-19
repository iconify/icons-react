import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bdsaqvbpn.css';
import '../../css/q/qdvve0b7u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="bdsaqvbpn"/><path class="qdvve0b7u"/></g>`,
		"fallback": "glyphs-poly:plane-departure",
	});
}

export default Component;
