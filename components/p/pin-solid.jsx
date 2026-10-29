import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kc94r4bnx.css';
import '../../css/h/hy92uyhce.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kc94r4bnx"/><path class="hy92uyhce wm-a"/></g>`,
		"fallback": "withicons:pin-solid",
	});
}

export default Component;
