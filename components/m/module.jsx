import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwkt4gbca.css';
import '../../css/g/gv_v1obbp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="iwkt4gbca"/><path class="gv_v1obbp"/></g>`,
		"fallback": "tdesign:module",
	});
}

export default Component;
