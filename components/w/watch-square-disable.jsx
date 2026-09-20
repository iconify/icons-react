import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/fc11r4www.css';
import '../../css/l/lbglbdcav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="fc11r4www"/><path class="lbglbdcav"/></g>`,
		"fallback": "streamline-sharp:watch-square-disable",
	});
}

export default Component;
