import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/t/timsc0b1h.css';
import '../../css/v/vex34rbzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="timsc0b1h"/><path class="vex34rbzc"/></g>`,
		"fallback": "wordpress:subscript",
	});
}

export default Component;
