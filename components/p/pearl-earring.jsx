import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfphd9she.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfphd9she"/>`,
		"fallback": "game-icons:pearl-earring",
	});
}

export default Component;
