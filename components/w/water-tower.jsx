import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt7u62brp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt7u62brp"/>`,
		"fallback": "game-icons:water-tower",
	});
}

export default Component;
