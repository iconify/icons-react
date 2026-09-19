import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/otsa5xe7o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="otsa5xe7o"/>`,
		"fallback": "game-icons:unicycle",
	});
}

export default Component;
