import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/vopf8xhqz.css';
import '../../css/n/nq88wb-nc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="vopf8xhqz"/><path class="nq88wb-nc"/></g>`,
		"fallback": "streamline-sharp:ring",
	});
}

export default Component;
