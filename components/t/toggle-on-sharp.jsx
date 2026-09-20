import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/u/u-th1gbxa.css';
import '../../css/o/o4kr9t73l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="u-th1gbxa"/><path class="o4kr9t73l"/></g>`,
		"fallback": "keyline-icons:toggle-on-sharp",
	});
}

export default Component;
