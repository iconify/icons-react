import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ffrhalb9c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ffrhalb9c"/>`,
		"fallback": "game-icons:magnifying-glass",
	});
}

export default Component;
