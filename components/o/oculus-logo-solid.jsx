import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fp6o6d8oj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fp6o6d8oj"/>`,
		"fallback": "streamline-logos:oculus-logo-solid",
	});
}

export default Component;
