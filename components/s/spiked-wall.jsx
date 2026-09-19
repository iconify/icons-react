import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bweh7qb2x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bweh7qb2x"/>`,
		"fallback": "game-icons:spiked-wall",
	});
}

export default Component;
