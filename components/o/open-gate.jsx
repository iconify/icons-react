import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/whhsbdc7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="whhsbdc7r"/>`,
		"fallback": "game-icons:open-gate",
	});
}

export default Component;
