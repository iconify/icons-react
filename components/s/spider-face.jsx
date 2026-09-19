import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vj6hvxs6a.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vj6hvxs6a"/>`,
		"fallback": "game-icons:spider-face",
	});
}

export default Component;
