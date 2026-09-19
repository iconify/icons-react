import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/izj9p1ffx.css';
import '../../css/f/fg98ribbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="izj9p1ffx"/><path class="fg98ribbx"/></g>`,
		"fallback": "hugeicons:shield-blockchain",
	});
}

export default Component;
