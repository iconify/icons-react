import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avwjq7blo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avwjq7blo"/>`,
		"fallback": "game-icons:mesh-network",
	});
}

export default Component;
