import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4y6b75_l.css';
import '../../css/w/wekkqjbkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4y6b75_l"/><path class="wekkqjbkd"/></g>`,
		"fallback": "tdesign:video-camera",
	});
}

export default Component;
