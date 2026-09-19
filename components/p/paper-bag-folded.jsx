import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsqgsc7zf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsqgsc7zf"/>`,
		"fallback": "game-icons:paper-bag-folded",
	});
}

export default Component;
