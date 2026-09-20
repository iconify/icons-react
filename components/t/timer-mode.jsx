import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e16t_xnso.css';
import '../../css/y/y5rz4bcgu.css';
import '../../css/r/rg-eymbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e16t_xnso"/><path class="y5rz4bcgu"/><path class="rg-eymbxh"/></g>`,
		"fallback": "streamline-cyber-color:timer-mode",
	});
}

export default Component;
