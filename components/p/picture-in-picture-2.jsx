import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eel057mgm.css';
import '../../css/g/gepe5nb3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eel057mgm"/><rect class="gepe5nb3k"/></g>`,
		"fallback": "proicons:picture-in-picture-2",
	});
}

export default Component;
