import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixr70_7ns.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixr70_7ns"/>`,
		"fallback": "game-icons:vending-machine",
	});
}

export default Component;
