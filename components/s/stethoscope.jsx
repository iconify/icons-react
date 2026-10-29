import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mggu2tbml.css';
import '../../css/n/nu8tdetna.css';
import '../../css/f/fagua8bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="mggu2tbml"/><path class="nu8tdetna"/><path class="fagua8bxp"/></g>`,
		"fallback": "withicons:stethoscope",
	});
}

export default Component;
