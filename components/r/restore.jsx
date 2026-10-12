import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qo_rl6brd.css';
import '../../css/h/hwd4k5boz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qo_rl6brd"/><path class="hwd4k5boz"/></g>`,
		"fallback": "andrsrxn:restore",
	});
}

export default Component;
