import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wt5ticb6u.css';
import '../../css/t/trrsh2xrd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="wt5ticb6u"/><path class="trrsh2xrd"/></g>`,
		"fallback": "matita:user",
	});
}

export default Component;
