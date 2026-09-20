import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj9jp9dwm.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj9jp9dwm"/>`,
		"fallback": "streamline-color:sign-hashtag",
	});
}

export default Component;
