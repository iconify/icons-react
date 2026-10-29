import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/svvk-3k2b.css';
import '../../css/t/t2srnhboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="svvk-3k2b"/><path class="t2srnhboy wm-a"/></g>`,
		"fallback": "withicons:save",
	});
}

export default Component;
