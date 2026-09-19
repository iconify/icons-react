import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r_aow6bje.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r_aow6bje"/>`,
		"fallback": "game-icons:smartphone",
	});
}

export default Component;
