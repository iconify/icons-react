import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uipcn5jcw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uipcn5jcw"/>`,
		"fallback": "game-icons:read",
	});
}

export default Component;
