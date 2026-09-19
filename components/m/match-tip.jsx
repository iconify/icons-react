import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ingjy4eqt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ingjy4eqt"/>`,
		"fallback": "game-icons:match-tip",
	});
}

export default Component;
