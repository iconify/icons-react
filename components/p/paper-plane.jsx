import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbzdh2bun.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbzdh2bun"/>`,
		"fallback": "game-icons:paper-plane",
	});
}

export default Component;
