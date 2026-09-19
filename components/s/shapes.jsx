import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/od9a5k13f.css';

const viewBox = {"width":1024,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="od9a5k13f"/>`,
		"fallback": "whh:shapes",
	});
}

export default Component;
