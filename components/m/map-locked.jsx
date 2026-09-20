import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ysucsepmm.css';
import '../../css/h/h-i-xbioi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ysucsepmm"/><path class="h-i-xbioi"/></g>`,
		"fallback": "tdesign:map-locked",
	});
}

export default Component;
