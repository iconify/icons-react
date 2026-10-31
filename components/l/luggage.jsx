import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/t/tpp2vxiyy.css';
import '../../css/y/ynid65nza.css';
import '../../css/f/fbg9e3bvi.css';
import '../../css/u/u19kmfb1u.css';
import '../../css/l/lub6bc51k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="tpp2vxiyy wm-shadow"/><path class="ynid65nza"/><path class="fbg9e3bvi"/><path class="u19kmfb1u"/><path class="lub6bc51k"/></g>`,
		"fallback": "withicons-retro:luggage",
	});
}

export default Component;
