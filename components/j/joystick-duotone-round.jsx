import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyaevcbqm.css';
import '../../css/k/ki936zete.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oyaevcbqm"/><path class="ki936zete"/></g>`,
		"fallback": "coolicons:joystick-duotone-round",
	});
}

export default Component;
