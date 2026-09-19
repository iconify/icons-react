import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/adqn4c7sr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="adqn4c7sr"/>`,
		"fallback": "game-icons:person-in-bed",
	});
}

export default Component;
