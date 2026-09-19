import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otfv3cb9i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otfv3cb9i"/>`,
		"fallback": "game-icons:sharp-halberd",
	});
}

export default Component;
