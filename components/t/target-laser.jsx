import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc0-x-b8l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc0-x-b8l"/>`,
		"fallback": "game-icons:target-laser",
	});
}

export default Component;
