import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aj5591bhe.css';
import '../../css/o/ode8ejodk.css';
import '../../css/x/xxv9qnbtt.css';
import '../../css/t/twhj22bal.css';
import '../../css/l/l8bz6bbdc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="aj5591bhe"/><path class="ode8ejodk"/><path class="xxv9qnbtt"/><path class="twhj22bal"/><path class="l8bz6bbdc"/></g>`,
		"fallback": "streamline-color:threat-browser-1",
	});
}

export default Component;
