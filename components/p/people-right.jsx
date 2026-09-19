import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ce08mxb1p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ce08mxb1p"/>`,
		"fallback": "icon-park-outline:people-right",
	});
}

export default Component;
