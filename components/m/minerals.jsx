import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6c_ac5xm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6c_ac5xm"/>`,
		"fallback": "game-icons:minerals",
	});
}

export default Component;
