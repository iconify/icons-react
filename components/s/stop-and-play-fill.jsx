import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aet79lw6w.css';
import '../../css/j/jat5hvbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="aet79lw6w"/><path class="jat5hvbip"/></g>`,
		"fallback": "lets-icons:stop-and-play-fill",
	});
}

export default Component;
