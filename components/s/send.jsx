import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5jtl4brd.css';
import '../../css/s/slyguszvk.css';
import '../../css/e/ekngixjgr.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g5jtl4brd"><path class="slyguszvk"/><path class="ekngixjgr"/></g>`,
		"fallback": "bpmn:send",
	});
}

export default Component;
