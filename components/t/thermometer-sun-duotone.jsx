import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dj05c4b-z.css';
import '../../css/y/ylsti69ii.css';
import '../../css/x/xcyk673ka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dj05c4b-z"/><path class="ylsti69ii"/><path class="xcyk673ka"/></g>`,
		"fallback": "keyline-icons:thermometer-sun-duotone",
	});
}

export default Component;
