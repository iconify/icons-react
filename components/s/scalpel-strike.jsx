import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqfbf6-1f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqfbf6-1f"/>`,
		"fallback": "game-icons:scalpel-strike",
	});
}

export default Component;
