import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/it48t2bjw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="it48t2bjw"/>`,
		"fallback": "fxemoji:rightangerbubble",
	});
}

export default Component;
