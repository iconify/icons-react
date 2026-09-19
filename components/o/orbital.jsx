import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otdq19b2t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otdq19b2t"/>`,
		"fallback": "game-icons:orbital",
	});
}

export default Component;
