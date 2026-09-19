import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fg45s4b0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fg45s4b0j"/>`,
		"fallback": "game-icons:top-paw",
	});
}

export default Component;
