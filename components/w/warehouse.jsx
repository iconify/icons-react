import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/eyxbrnbyd.css';
import '../../css/l/lafaz-x7c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="eyxbrnbyd"/><path class="lafaz-x7c"/></g>`,
		"fallback": "vadivam:warehouse",
	});
}

export default Component;
