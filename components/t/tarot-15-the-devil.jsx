import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nm0r1bb0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nm0r1bb0j"/>`,
		"fallback": "game-icons:tarot-15-the-devil",
	});
}

export default Component;
