import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jyrcabcak.css';
import '../../css/h/h7o1n1z4d.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jyrcabcak"/><path class="h7o1n1z4d"/>`,
		"fallback": "ooui:speech-bubble-alert-ltr",
	});
}

export default Component;
