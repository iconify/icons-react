import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipss57bdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ipss57bdc"/>`,
		"fallback": "game-icons:padlock-open",
	});
}

export default Component;
