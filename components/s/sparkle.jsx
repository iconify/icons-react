import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w25egcbny.css';
import '../../css/e/egmsjwuap.css';
import '../../css/d/dp46y5x7c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w25egcbny"/><path class="egmsjwuap"/><path class="dp46y5x7c"/>`,
		"fallback": "fxemoji:sparkle",
	});
}

export default Component;
