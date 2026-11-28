import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xqqfukbrn.css';
import '../../css/r/ruk7zkq5c.css';
import '../../css/c/c_6ppe0-z.css';
import '../../css/x/x1il4v3ex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><circle class="xqqfukbrn"/><path class="ruk7zkq5c"/><path class="c_6ppe0-z"/><path class="x1il4v3ex"/></g>`,
		"fallback": "iconaut:timer",
	});
}

export default Component;
