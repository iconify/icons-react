import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/czw74fo5e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="czw74fo5e"/>`,
		"fallback": "game-icons:orb-direction",
	});
}

export default Component;
