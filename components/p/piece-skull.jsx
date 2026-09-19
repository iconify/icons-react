import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p44ng8ujk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p44ng8ujk"/>`,
		"fallback": "game-icons:piece-skull",
	});
}

export default Component;
