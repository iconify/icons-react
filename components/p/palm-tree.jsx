import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ii7da9b0d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ii7da9b0d"/>`,
		"fallback": "game-icons:palm-tree",
	});
}

export default Component;
