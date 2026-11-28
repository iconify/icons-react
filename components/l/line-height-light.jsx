import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epqd4ib6m.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epqd4ib6m"/>`,
		"fallback": "pullo:line-height-light",
	});
}

export default Component;
