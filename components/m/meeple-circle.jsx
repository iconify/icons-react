import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usxh3fzft.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usxh3fzft"/>`,
		"fallback": "game-icons:meeple-circle",
	});
}

export default Component;
