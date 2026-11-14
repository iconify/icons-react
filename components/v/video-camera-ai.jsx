import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/u/udf7oioqp.css';
import '../../css/w/wovsjwbgp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="udf7oioqp"/><path class="wovsjwbgp"/></g>`,
		"fallback": "hugeicons:video-camera-ai",
	});
}

export default Component;
