import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elyw49b3l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elyw49b3l"/>`,
		"fallback": "game-icons:token",
	});
}

export default Component;
