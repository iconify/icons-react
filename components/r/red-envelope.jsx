import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/buxga7syi.css';
import '../../css/p/p19yvk-0i.css';
import '../../css/e/elf7rzb6q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="buxga7syi"/><path class="p19yvk-0i wm-a"/><path class="elf7rzb6q wm-s"/></g>`,
		"fallback": "withicons:red-envelope",
	});
}

export default Component;
