import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/a/a8ela6bri.css';
import '../../css/k/keuscgokd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="a8ela6bri"/><path class="keuscgokd"/></g>`,
		"fallback": "streamline-sharp:plane-flight-board",
	});
}

export default Component;
