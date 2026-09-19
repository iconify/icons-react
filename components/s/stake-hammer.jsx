import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edzzb9bho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edzzb9bho"/>`,
		"fallback": "game-icons:stake-hammer",
	});
}

export default Component;
