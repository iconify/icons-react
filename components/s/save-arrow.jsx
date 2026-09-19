import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prqr2wber.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prqr2wber"/>`,
		"fallback": "game-icons:save-arrow",
	});
}

export default Component;
