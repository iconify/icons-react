import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/np-jiebvi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="np-jiebvi"/>`,
		"fallback": "game-icons:mountain-climbing",
	});
}

export default Component;
