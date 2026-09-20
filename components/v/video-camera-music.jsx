import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m4e9lab1v.css';
import '../../css/j/jilsw3b_d.css';
import '../../css/t/tlyv6rbuu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m4e9lab1v"/><path class="jilsw3b_d"/><path class="tlyv6rbuu"/></g>`,
		"fallback": "tdesign:video-camera-music",
	});
}

export default Component;
