import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urgc0zbwo.css';

const viewBox = {"width":1024,"height":768};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urgc0zbwo"/>`,
		"fallback": "whh:markerright",
	});
}

export default Component;
