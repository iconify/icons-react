import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kobygob2d.css';
import '../../css/p/p51kjbcdl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="kobygob2d"/><path class="p51kjbcdl"/></g>`,
		"fallback": "withicons:user-round-duo",
	});
}

export default Component;
