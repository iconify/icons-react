import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oqd2_6pjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oqd2_6pjj"/>`,
		"fallback": "game-icons:ladybug",
	});
}

export default Component;
