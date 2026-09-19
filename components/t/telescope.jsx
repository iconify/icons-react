import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rrzx1ogut.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rrzx1ogut"/>`,
		"fallback": "game-icons:telescope",
	});
}

export default Component;
