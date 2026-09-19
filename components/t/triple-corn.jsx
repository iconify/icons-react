import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nbkl0skyo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nbkl0skyo"/>`,
		"fallback": "game-icons:triple-corn",
	});
}

export default Component;
