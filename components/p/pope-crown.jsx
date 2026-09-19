import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji4w1hy1i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji4w1hy1i"/>`,
		"fallback": "game-icons:pope-crown",
	});
}

export default Component;
