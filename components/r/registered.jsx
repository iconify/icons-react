import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ige_o2b4i.css';
import '../../css/i/ikzrdlr9i.css';
import '../../css/l/ls4f4ib8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ige_o2b4i"/><path class="ikzrdlr9i"/><path class="ls4f4ib8k"/></g>`,
		"fallback": "andrsrxn:registered",
	});
}

export default Component;
