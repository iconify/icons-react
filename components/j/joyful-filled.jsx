import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sns8z-bqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sns8z-bqn"/>`,
		"fallback": "tdesign:joyful-filled",
	});
}

export default Component;
