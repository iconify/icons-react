import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ibzzkqw0r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ibzzkqw0r"/>`,
		"fallback": "game-icons:washing-machine",
	});
}

export default Component;
