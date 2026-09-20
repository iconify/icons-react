import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y8d8c1pjc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y8d8c1pjc"/>`,
		"fallback": "ri:user-voice-fill",
	});
}

export default Component;
