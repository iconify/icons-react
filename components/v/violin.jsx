import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yatdorb1e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yatdorb1e"/>`,
		"fallback": "game-icons:violin",
	});
}

export default Component;
