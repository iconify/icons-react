import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m7bgq0r8p.css';
import '../../css/p/p7_ui2bab.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m7bgq0r8p"/><path class="p7_ui2bab"/></g>`,
		"fallback": "iconoir:pin-alt",
	});
}

export default Component;
