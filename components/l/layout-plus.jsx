import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qpk0tl1ql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qpk0tl1ql"/>`,
		"fallback": "noviair-light:layout-plus",
	});
}

export default Component;
