import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjp6-toga.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjp6-toga"/>`,
		"fallback": "streamline:star-2-remix",
	});
}

export default Component;
