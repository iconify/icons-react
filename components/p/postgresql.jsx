import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vo1ccfb3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vo1ccfb3x"/>`,
		"fallback": "griddy-icons:postgresql",
	});
}

export default Component;
