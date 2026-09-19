import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwu2lbb9e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwu2lbb9e"/>`,
		"fallback": "game-icons:wave-strike",
	});
}

export default Component;
