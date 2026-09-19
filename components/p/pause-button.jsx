import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hn5cemb6n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hn5cemb6n"/>`,
		"fallback": "game-icons:pause-button",
	});
}

export default Component;
