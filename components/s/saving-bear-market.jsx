import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w70lsgs8c.css';
import '../../css/f/fsebmeb8b.css';
import '../../css/w/wj8gm1b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="w70lsgs8c"><path class="fsebmeb8b"/><path class="wj8gm1b8z"/></g>`,
		"fallback": "streamline-freehand-color:saving-bear-market",
	});
}

export default Component;
