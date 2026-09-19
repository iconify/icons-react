import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rd-xe713w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rd-xe713w"/>`,
		"fallback": "game-icons:vuvuzelas",
	});
}

export default Component;
