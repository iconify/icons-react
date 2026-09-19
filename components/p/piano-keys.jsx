import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpv5obb6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpv5obb6f"/>`,
		"fallback": "game-icons:piano-keys",
	});
}

export default Component;
