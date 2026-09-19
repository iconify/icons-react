import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/joqi56b4g.css';

const viewBox = {"width":416,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="joqi56b4g"/>`,
		"fallback": "zmdi:settings",
	});
}

export default Component;
