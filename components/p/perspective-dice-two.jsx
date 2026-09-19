import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo71e5b1u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo71e5b1u"/>`,
		"fallback": "game-icons:perspective-dice-two",
	});
}

export default Component;
