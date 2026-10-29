import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h7xnus5-e.css';
import '../../css/u/unefcsbmw.css';
import '../../css/a/anua2ob4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="h7xnus5-e"/><path class="unefcsbmw"/><path class="anua2ob4h wm-a"/></g>`,
		"fallback": "withicons:watch",
	});
}

export default Component;
