import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/poterobej.css';
import '../../css/g/gc9f00b9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="poterobej"/><path class="gc9f00b9r"/>`,
		"fallback": "bxs:microphone-off",
	});
}

export default Component;
