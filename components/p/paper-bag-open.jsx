import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjs4webtc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjs4webtc"/>`,
		"fallback": "game-icons:paper-bag-open",
	});
}

export default Component;
