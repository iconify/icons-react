import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/q/qe4nt8bqt.css';
import '../../css/y/yirvmob5c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="qe4nt8bqt"/><path class="yirvmob5c"/></g>`,
		"fallback": "hugeicons:trade-up",
	});
}

export default Component;
