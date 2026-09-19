import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s334ssb6o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s334ssb6o"/>`,
		"fallback": "game-icons:level-four-advanced",
	});
}

export default Component;
