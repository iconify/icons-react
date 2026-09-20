import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y73fl8hsz.css';
import '../../css/f/f21qp2hxp.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y73fl8hsz"/><path class="f21qp2hxp"/>`,
		"fallback": "lineicons:slim",
	});
}

export default Component;
