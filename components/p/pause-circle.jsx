import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xz83p3b-c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xz83p3b-c"/>`,
		"fallback": "ion:pause-circle",
	});
}

export default Component;
