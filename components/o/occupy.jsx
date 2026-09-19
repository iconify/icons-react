import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ro2c__2kg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ro2c__2kg"/>`,
		"fallback": "game-icons:occupy",
	});
}

export default Component;
