import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xh1z0fbeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xh1z0fbeg"/>`,
		"fallback": "game-icons:pirate-hat",
	});
}

export default Component;
