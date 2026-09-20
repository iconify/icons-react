import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w7b_vbccz.css';
import '../../css/y/ygi57jbmz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w7b_vbccz"/><path class="ygi57jbmz"/></g>`,
		"fallback": "streamline-plump-color:mail-notification-flat",
	});
}

export default Component;
