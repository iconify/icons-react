import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/id1l07j3y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="id1l07j3y"/>`,
		"fallback": "game-icons:military-ambulance",
	});
}

export default Component;
