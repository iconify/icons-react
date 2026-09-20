import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/v/vx6ye67lo.css';
import '../../css/q/q4rja4xkx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="vx6ye67lo"/><path class="q4rja4xkx"/></g>`,
		"fallback": "keyline-icons:phone-incoming-sharp-fill",
	});
}

export default Component;
