import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p11m9zbrl.css';
import '../../css/j/jllxgobne.css';
import '../../css/w/wcuvlk0rr.css';
import '../../css/y/ykbnwb91e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p11m9zbrl"/><path class="jllxgobne"/><path class="wcuvlk0rr"/><path class="ykbnwb91e"/></g>`,
		"fallback": "streamline-cyber-color:telecommunicator",
	});
}

export default Component;
