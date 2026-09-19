import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mom0oactl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mom0oactl"/>`,
		"fallback": "game-icons:rainbow-star",
	});
}

export default Component;
