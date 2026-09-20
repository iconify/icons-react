import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f46bn0s6y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f46bn0s6y"/>`,
		"fallback": "keyline-icons:send-clock",
	});
}

export default Component;
