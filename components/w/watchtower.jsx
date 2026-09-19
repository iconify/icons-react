import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i42fe6b8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i42fe6b8s"/>`,
		"fallback": "game-icons:watchtower",
	});
}

export default Component;
