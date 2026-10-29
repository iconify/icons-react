import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/oe-98mb0w.css';
import '../../css/m/m5ytp9bms.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="oe-98mb0w"/><path class="m5ytp9bms wm-a"/></g>`,
		"fallback": "withicons:text-cursor-duo",
	});
}

export default Component;
