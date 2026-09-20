import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/ssczkxbhe.css';
import '../../css/t/t3pvg7bbb.css';
import '../../css/e/e4f8pl63i.css';
import '../../css/n/nynv01bec.css';
import '../../css/l/ljib0ebde.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ssczkxbhe"/><path class="t3pvg7bbb"/><path class="e4f8pl63i"/><path class="nynv01bec"/><path class="ljib0ebde"/></g>`,
		"fallback": "streamline-cyber-color:shopping-cart-user-2",
	});
}

export default Component;
