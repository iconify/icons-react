import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4ipzwpsl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4ipzwpsl"/>`,
		"fallback": "game-icons:slot-machine",
	});
}

export default Component;
