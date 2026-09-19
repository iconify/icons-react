import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukd08s7uo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukd08s7uo"/>`,
		"fallback": "game-icons:skull-sabertooth",
	});
}

export default Component;
