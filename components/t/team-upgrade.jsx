import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ilr3y11pt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ilr3y11pt"/>`,
		"fallback": "game-icons:team-upgrade",
	});
}

export default Component;
