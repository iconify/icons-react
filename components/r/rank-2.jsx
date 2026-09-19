import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwktg_e7t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwktg_e7t"/>`,
		"fallback": "game-icons:rank-2",
	});
}

export default Component;
