import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v23ra87cd.css';
import '../../css/g/g8g7_q-fc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v23ra87cd"/><path class="g8g7_q-fc"/>`,
		"fallback": "cil:room",
	});
}

export default Component;
