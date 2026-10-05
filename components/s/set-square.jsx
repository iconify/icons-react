import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/hjpdjdbgn.css';
import '../../css/t/tm57llmqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="hjpdjdbgn"/><path class="tm57llmqc"/></g>`,
		"fallback": "matita:set-square",
	});
}

export default Component;
