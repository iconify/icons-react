import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-vzh8b2z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-vzh8b2z"/>`,
		"fallback": "game-icons:recycle",
	});
}

export default Component;
