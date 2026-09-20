import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pizot5u_q.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pizot5u_q"/>`,
		"fallback": "streamline-flex:keyboard-remix",
	});
}

export default Component;
