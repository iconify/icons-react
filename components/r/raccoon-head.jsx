import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vjf9gzoed.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vjf9gzoed"/>`,
		"fallback": "game-icons:raccoon-head",
	});
}

export default Component;
