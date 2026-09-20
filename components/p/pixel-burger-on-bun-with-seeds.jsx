import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/walr4d8bz.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="walr4d8bz"/>`,
		"fallback": "pinhead:pixel-burger-on-bun-with-seeds",
	});
}

export default Component;
