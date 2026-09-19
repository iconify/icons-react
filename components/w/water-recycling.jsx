import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xj2mv2b3z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xj2mv2b3z"/>`,
		"fallback": "game-icons:water-recycling",
	});
}

export default Component;
