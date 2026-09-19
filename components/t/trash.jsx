import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hrrtwolxr.css';
import '../../css/n/nsqn1rzpd.css';
import '../../css/m/mdjkfeg-d.css';
import '../../css/z/zbnzy9bch.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hrrtwolxr"/><path transform="matrix(96.7529 0 0 87.18526 55.328 -89814.987)" class="nsqn1rzpd"/><path class="mdjkfeg-d"/><path class="zbnzy9bch"/>`,
		"fallback": "bpmn:trash",
	});
}

export default Component;
