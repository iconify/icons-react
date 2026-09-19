import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygum6sb4u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygum6sb4u"/>`,
		"fallback": "game-icons:three-keys",
	});
}

export default Component;
