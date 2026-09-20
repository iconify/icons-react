import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-_punbps.css';
import '../../css/q/q8b3x8beh.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-_punbps"/><path class="q8b3x8beh"/>`,
		"fallback": "qlementine-icons:rotate-clockwise-16",
	});
}

export default Component;
