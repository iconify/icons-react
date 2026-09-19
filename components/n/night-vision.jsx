import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r80bozb5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r80bozb5l"/>`,
		"fallback": "game-icons:night-vision",
	});
}

export default Component;
