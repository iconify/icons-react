import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nit60o93h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nit60o93h"/>`,
		"fallback": "game-icons:pyromaniac",
	});
}

export default Component;
