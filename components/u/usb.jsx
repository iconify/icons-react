import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/ydkws-u_v.css';
import '../../css/z/zxq865bbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ydkws-u_v"/><path class="zxq865bbb"/></g>`,
		"fallback": "withicons-retro:usb",
	});
}

export default Component;
