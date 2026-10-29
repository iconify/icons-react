import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yk6pw_bfq.css';
import '../../css/k/kro82vbrq.css';
import '../../css/g/g6o8xobrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="yk6pw_bfq"/><path class="kro82vbrq wm-a"/><path class="g6o8xobrr wm-s"/></g>`,
		"fallback": "withicons:satellite-dish",
	});
}

export default Component;
