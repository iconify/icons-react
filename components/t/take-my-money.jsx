import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ylkgm9bed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ylkgm9bed"/>`,
		"fallback": "game-icons:take-my-money",
	});
}

export default Component;
