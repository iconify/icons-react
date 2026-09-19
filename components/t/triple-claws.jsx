import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mjd1sol1b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mjd1sol1b"/>`,
		"fallback": "game-icons:triple-claws",
	});
}

export default Component;
