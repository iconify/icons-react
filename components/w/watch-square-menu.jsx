import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jxerl8ujt.css';
import '../../css/f/ffq1wh0qp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="y9tr6bcfx"><path class="jxerl8ujt"/><path class="ffq1wh0qp"/></g>`,
		"fallback": "streamline-flex:watch-square-menu",
	});
}

export default Component;
