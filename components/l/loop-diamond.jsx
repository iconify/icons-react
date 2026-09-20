import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/at2dx1rbn.css';
import '../../css/m/mkkam-3zu.css';
import '../../css/y/yseds6b5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="at2dx1rbn"><path class="mkkam-3zu"/><path class="yseds6b5o"/></g>`,
		"fallback": "streamline-cyber-color:loop-diamond",
	});
}

export default Component;
