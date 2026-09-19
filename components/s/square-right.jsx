import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9c-s5bzr.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9c-s5bzr"/>`,
		"fallback": "zmdi:square-right",
	});
}

export default Component;
