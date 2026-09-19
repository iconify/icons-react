import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rsy3h9rol.css';

const viewBox = {"width":448,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rsy3h9rol"/>`,
		"fallback": "zmdi:labels",
	});
}

export default Component;
