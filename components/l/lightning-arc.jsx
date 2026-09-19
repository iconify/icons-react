import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mrjc3vb7d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mrjc3vb7d"/>`,
		"fallback": "game-icons:lightning-arc",
	});
}

export default Component;
