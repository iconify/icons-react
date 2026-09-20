import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3cey1b6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3cey1b6e"/>`,
		"fallback": "simple-icons:livekit",
	});
}

export default Component;
