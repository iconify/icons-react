import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj6a1we8d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj6a1we8d"/>`,
		"fallback": "game-icons:plants-and-animals",
	});
}

export default Component;
