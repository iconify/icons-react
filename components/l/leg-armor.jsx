import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lvtxacs1z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lvtxacs1z"/>`,
		"fallback": "game-icons:leg-armor",
	});
}

export default Component;
