import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/j/j_-iwmrza.css';
import '../../css/x/xhx0r7bth.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="j_-iwmrza"/><path class="xhx0r7bth"/></g>`,
		"fallback": "matita:trending-down",
	});
}

export default Component;
