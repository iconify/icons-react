import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yz8d3towl.css';
import '../../css/t/tduq9xbut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yz8d3towl"/><path class="tduq9xbut"/></g>`,
		"fallback": "coolicons:wavy-duotone-round",
	});
}

export default Component;
