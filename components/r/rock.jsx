import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pn3kl9bom.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pn3kl9bom"/>`,
		"fallback": "game-icons:rock",
	});
}

export default Component;
