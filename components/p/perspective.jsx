import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qtnp9sbxu.css';
import '../../css/c/c_7-gp-_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qtnp9sbxu"/><path class="c_7-gp-_b"/></g>`,
		"fallback": "andrsrxn:perspective",
	});
}

export default Component;
