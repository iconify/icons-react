import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ysuffg60n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ysuffg60n"/>`,
		"fallback": "game-icons:lucifer-cannon",
	});
}

export default Component;
