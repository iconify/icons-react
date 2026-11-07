import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hcmgtpbjl.css';
import '../../css/y/ysujvx2kd.css';
import '../../css/o/oi2kbnb3t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hcmgtpbjl"/><path class="ysujvx2kd"/><path class="oi2kbnb3t"/>`,
		"fallback": "solar:sticker-square-bold",
	});
}

export default Component;
