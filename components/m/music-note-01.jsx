import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/u/ut4jbwyoe.css';
import '../../css/n/nnc8tac4z.css';
import '../../css/o/ozw_qtvty.css';
import '../../css/q/qufgpumfi.css';
import '../../css/y/y_q6z8bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ut4jbwyoe"/><circle class="nnc8tac4z"/><circle class="ozw_qtvty"/><path class="qufgpumfi"/><path class="y_q6z8bof"/></g>`,
		"fallback": "hugeicons:music-note-01",
	});
}

export default Component;
