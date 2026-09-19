import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyeo0vb7r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyeo0vb7r"/>`,
		"fallback": "game-icons:smash-arrows",
	});
}

export default Component;
