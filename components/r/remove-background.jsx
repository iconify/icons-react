import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/h/h63kkxb3c.css';
import '../../css/s/sq3c6hbbq.css';
import '../../css/p/powe2c5ch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="h63kkxb3c"/><path class="sq3c6hbbq"/><path class="powe2c5ch"/></g>`,
		"fallback": "codex:remove-background",
	});
}

export default Component;
