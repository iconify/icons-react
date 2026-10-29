import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/gyml1pbky.css';
import '../../css/n/nrkw5gj_w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="gyml1pbky"/><path class="nrkw5gj_w wm-a"/></g>`,
		"fallback": "withicons:pound-sterling",
	});
}

export default Component;
