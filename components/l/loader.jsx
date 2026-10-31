import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bg2fqfxmz.css';
import '../../css/q/q_h3vjbce.css';
import '../../css/c/co_a6dbew.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="bg2fqfxmz wm-shadow"/><path class="q_h3vjbce wm-shadow"/><path class="co_a6dbew"/></g>`,
		"fallback": "withicons-brutal:loader",
	});
}

export default Component;
