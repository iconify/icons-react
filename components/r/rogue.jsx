import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ee5gdzt4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ee5gdzt4p"/>`,
		"fallback": "game-icons:rogue",
	});
}

export default Component;
