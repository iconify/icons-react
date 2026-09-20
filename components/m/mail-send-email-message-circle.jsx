import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yvd61yb8z.css';
import '../../css/w/wzw7k-iny.css';
import '../../css/l/lslo1tbhy.css';
import '../../css/v/vw_chcc0y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yvd61yb8z"/><path class="wzw7k-iny"/><path class="lslo1tbhy"/><path class="vw_chcc0y"/></g>`,
		"fallback": "streamline-flex-color:mail-send-email-message-circle",
	});
}

export default Component;
