import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mhoi73k-m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mhoi73k-m"/>`,
		"fallback": "game-icons:volcano",
	});
}

export default Component;
