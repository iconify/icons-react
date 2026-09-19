import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joqy0-_5z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joqy0-_5z"/>`,
		"fallback": "game-icons:toolbox",
	});
}

export default Component;
