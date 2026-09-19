import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yg9mmgber.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yg9mmgber"/>`,
		"fallback": "zmdi:plus-circle-o-duplicate",
	});
}

export default Component;
