import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/ipkd9vbgw.css';
import '../../css/t/thjectbkq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ipkd9vbgw"/><path class="thjectbkq wm-a"/></g>`,
		"fallback": "withicons:thermometer-sun",
	});
}

export default Component;
