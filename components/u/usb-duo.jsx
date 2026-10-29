import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/w7z623hhz.css';
import '../../css/i/ialz71b-c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="w7z623hhz"/><path class="ialz71b-c"/></g>`,
		"fallback": "withicons:usb-duo",
	});
}

export default Component;
