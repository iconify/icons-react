import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wqrvfl7vl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wqrvfl7vl"/>`,
		"fallback": "game-icons:stoned-skull",
	});
}

export default Component;
