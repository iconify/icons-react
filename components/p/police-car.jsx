import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfrm7eblf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfrm7eblf"/>`,
		"fallback": "game-icons:police-car",
	});
}

export default Component;
