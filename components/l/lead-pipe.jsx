import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cp7iw6bnu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cp7iw6bnu"/>`,
		"fallback": "game-icons:lead-pipe",
	});
}

export default Component;
