import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/owfdg3b6z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="owfdg3b6z"/>`,
		"fallback": "streamline-block:shopping-box",
	});
}

export default Component;
