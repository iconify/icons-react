import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1zjupb4e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w1zjupb4e"/>`,
		"fallback": "streamline:interface-arrows-corner-up-right-keyboard-top-arrow-right-up",
	});
}

export default Component;
