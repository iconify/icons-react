import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ftfqew1zn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ftfqew1zn"/>`,
		"fallback": "game-icons:spotted-mushroom",
	});
}

export default Component;
