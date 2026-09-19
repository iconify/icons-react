import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjkb6mbzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjkb6mbzv"/>`,
		"fallback": "game-icons:swimfins",
	});
}

export default Component;
