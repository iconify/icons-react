import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w30-vrati.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w30-vrati"/>`,
		"fallback": "game-icons:leaf-swirl",
	});
}

export default Component;
