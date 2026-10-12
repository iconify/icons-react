import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hbkso2b6p.css';
import '../../css/w/wy-2vbkjf.css';
import '../../css/s/s5171abot.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="hbkso2b6p"/><circle class="wy-2vbkjf"/><path class="s5171abot"/></g>`,
		"fallback": "andrsrxn:motion",
	});
}

export default Component;
