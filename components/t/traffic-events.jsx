import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ujvj9nxje.css';
import '../../css/j/j1bvvbb2u.css';
import '../../css/t/tn0k83bve.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ujvj9nxje"/><path class="j1bvvbb2u"/><path class="tn0k83bve"/></g>`,
		"fallback": "tdesign:traffic-events",
	});
}

export default Component;
