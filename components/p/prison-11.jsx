import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrcz0db9e.css';

const viewBox = {"width":11,"height":11};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nrcz0db9e"/>`,
		"fallback": "maki:prison-11",
	});
}

export default Component;
