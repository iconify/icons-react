import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkt6a0beh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dkt6a0beh"/>`,
		"fallback": "subway:mark",
	});
}

export default Component;
