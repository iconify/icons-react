import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjr5vrb5k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjr5vrb5k"/>`,
		"fallback": "game-icons:moon-bats",
	});
}

export default Component;
