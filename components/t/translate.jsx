import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/q/qq2-s7b1o.css';
import '../../css/h/hcsiaib7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="qq2-s7b1o"/><path class="hcsiaib7o"/></g>`,
		"fallback": "codex:translate",
	});
}

export default Component;
