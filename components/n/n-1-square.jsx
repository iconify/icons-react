import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ub7f00uxk.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ub7f00uxk"/>`,
		"fallback": "zmdi:n-1-square",
	});
}

export default Component;
