import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n95_fnbst.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n95_fnbst"/>`,
		"fallback": "game-icons:locked-door",
	});
}

export default Component;
