import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xat531b6m.css';
import '../../css/r/rmi3b7b_n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xat531b6m"/><path class="rmi3b7b_n"/></g>`,
		"fallback": "streamline-sharp:laptop-camera",
	});
}

export default Component;
