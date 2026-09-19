import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt-0_eb6r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt-0_eb6r"/>`,
		"fallback": "game-icons:leak",
	});
}

export default Component;
