import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qu-1hxbdt.css';
import '../../css/o/o-xk9mbvs.css';
import '../../css/w/wmmy0pb_j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="qu-1hxbdt"/><path class="o-xk9mbvs"/><path class="wmmy0pb_j"/></g>`,
		"fallback": "keyline-icons:shirt-sparkles-duotone",
	});
}

export default Component;
