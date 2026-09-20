import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c0_c1_bxh.css';
import '../../css/k/k3qzk_6hq.css';
import '../../css/m/manc0kbni.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c0_c1_bxh"/><path clip-rule="evenodd" class="k3qzk_6hq"/><path class="manc0kbni"/></g>`,
		"fallback": "streamline-flex-color:projector-board-flat",
	});
}

export default Component;
