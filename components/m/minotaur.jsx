import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7n1v6lug.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7n1v6lug"/>`,
		"fallback": "game-icons:minotaur",
	});
}

export default Component;
