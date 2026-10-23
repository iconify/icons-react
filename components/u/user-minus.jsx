import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e7h8csfzh.css';
import '../../css/r/r-67_tbgc.css';
import '../../css/k/kp8y-_btp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e7h8csfzh"/><path class="r-67_tbgc"/><path class="kp8y-_btp"/></g>`,
		"fallback": "matita:user-minus",
	});
}

export default Component;
