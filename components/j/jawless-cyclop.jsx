import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egbi063qu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="egbi063qu"/>`,
		"fallback": "game-icons:jawless-cyclop",
	});
}

export default Component;
