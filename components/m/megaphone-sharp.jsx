import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jof85mv9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jof85mv9e"/>`,
		"fallback": "keyline-icons:megaphone-sharp",
	});
}

export default Component;
