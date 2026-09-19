import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlbqq21ap.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlbqq21ap"/>`,
		"fallback": "game-icons:metal-scales",
	});
}

export default Component;
