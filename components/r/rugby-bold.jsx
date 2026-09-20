import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wsuk3cu1j.css';
import '../../css/d/d27vribrr.css';
import '../../css/l/l4zjyebel.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wsuk3cu1j"/><path class="d27vribrr"/><path clip-rule="evenodd" class="l4zjyebel"/></g>`,
		"fallback": "solar:rugby-bold",
	});
}

export default Component;
