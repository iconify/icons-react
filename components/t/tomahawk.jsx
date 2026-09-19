import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xhu81yb8t.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xhu81yb8t"/>`,
		"fallback": "game-icons:tomahawk",
	});
}

export default Component;
