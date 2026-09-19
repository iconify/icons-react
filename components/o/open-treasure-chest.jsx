import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfjdu186i.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfjdu186i"/>`,
		"fallback": "game-icons:open-treasure-chest",
	});
}

export default Component;
