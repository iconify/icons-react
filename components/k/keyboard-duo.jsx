import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q7xu_txfb.css';
import '../../css/t/tchbkabdf.css';
import '../../css/x/xkzrit3ld.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q7xu_txfb"/><path class="tchbkabdf"/><path class="xkzrit3ld"/></g>`,
		"fallback": "glyphs:keyboard-duo",
	});
}

export default Component;
