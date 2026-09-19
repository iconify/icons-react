import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtr-b-c8o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtr-b-c8o"/>`,
		"fallback": "game-icons:sleeveless-jacket",
	});
}

export default Component;
