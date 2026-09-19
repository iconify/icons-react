import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jz2b7dbmt.css';

const viewBox = {"width":432,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jz2b7dbmt"/>`,
		"fallback": "zmdi:transform",
	});
}

export default Component;
