import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/n3bd4wnbd.css';
import '../../css/v/vjy-5pbdo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="n3bd4wnbd"/><path class="vjy-5pbdo"/></g>`,
		"fallback": "feather:save",
	});
}

export default Component;
