import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e93nozsge.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e93nozsge"/>`,
		"fallback": "game-icons:nurse-male",
	});
}

export default Component;
