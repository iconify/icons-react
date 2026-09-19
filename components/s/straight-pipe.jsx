import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k99kj98ei.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k99kj98ei"/>`,
		"fallback": "game-icons:straight-pipe",
	});
}

export default Component;
