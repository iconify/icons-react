import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0tz-gtwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0tz-gtwr"/>`,
		"fallback": "boxicons:print-dollar-filled",
	});
}

export default Component;
