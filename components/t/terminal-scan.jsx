import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzwcw2icm.css';
import '../../css/x/xd9te--wr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wzwcw2icm"/><path class="xd9te--wr"/></g>`,
		"fallback": "andrsrxn:terminal-scan",
	});
}

export default Component;
