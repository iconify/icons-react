import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c6d77db6s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c6d77db6s"/>`,
		"fallback": "game-icons:perspective-dice-five",
	});
}

export default Component;
