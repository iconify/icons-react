import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/w/wdk1d7zll.css';
import '../../css/x/xzt-r3bal.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jtowsomii"><path class="wdk1d7zll"/><path class="xzt-r3bal"/></g>`,
		"fallback": "system-uicons:reset",
	});
}

export default Component;
