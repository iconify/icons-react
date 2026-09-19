import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/levcgi96z.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="levcgi96z"/>`,
		"fallback": "whh:phpnuke",
	});
}

export default Component;
