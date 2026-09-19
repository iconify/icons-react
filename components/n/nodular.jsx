import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2h2jo7ux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2h2jo7ux"/>`,
		"fallback": "game-icons:nodular",
	});
}

export default Component;
