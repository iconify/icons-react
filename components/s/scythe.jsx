import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bu340b6zu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bu340b6zu"/>`,
		"fallback": "game-icons:scythe",
	});
}

export default Component;
