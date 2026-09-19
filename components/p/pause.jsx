import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bh0aorlcf.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bh0aorlcf"/>`,
		"fallback": "fad:pause",
	});
}

export default Component;
