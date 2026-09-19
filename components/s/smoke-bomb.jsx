import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrk4vyy4s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrk4vyy4s"/>`,
		"fallback": "game-icons:smoke-bomb",
	});
}

export default Component;
