import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kurhgmb-i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kurhgmb-i"/>`,
		"fallback": "game-icons:steam-locomotive",
	});
}

export default Component;
