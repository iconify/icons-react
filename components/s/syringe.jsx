import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/hjw5xsb4u.css';
import '../../css/d/dl3jdm16l.css';
import '../../css/y/y5w-jqbee.css';
import '../../css/k/k4byxhb0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="hjw5xsb4u wm-shadow"/><path class="dl3jdm16l"/><path class="y5w-jqbee"/><path class="k4byxhb0r"/></g>`,
		"fallback": "withicons-retro:syringe",
	});
}

export default Component;
