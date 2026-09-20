import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rur7lbcdm.css';
import '../../css/e/ewosp-b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rur7lbcdm"/><path class="ewosp-b-y"/></g>`,
		"fallback": "reicon:teacher-filled",
	});
}

export default Component;
