import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/viapxsbol.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="viapxsbol"/>`,
		"fallback": "game-icons:tarot-16-the-tower",
	});
}

export default Component;
