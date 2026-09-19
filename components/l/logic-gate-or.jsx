import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gd637ybny.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gd637ybny"/>`,
		"fallback": "game-icons:logic-gate-or",
	});
}

export default Component;
