import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/ca4om92jh.css';
import '../../css/x/xx4d1_btx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ca4om92jh"/><path clip-rule="evenodd" class="xx4d1_btx"/></g>`,
		"fallback": "streamline-color:tickets-flat",
	});
}

export default Component;
