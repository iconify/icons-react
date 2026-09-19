import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u2z7jp5ww.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u2z7jp5ww"/>`,
		"fallback": "game-icons:unplugged",
	});
}

export default Component;
