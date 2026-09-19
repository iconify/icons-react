import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/ax1ugg9xx.css';
import '../../css/p/pk5c11biu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ax1ugg9xx"/><path class="pk5c11biu"/></g>`,
		"fallback": "iconoir:sound-low",
	});
}

export default Component;
