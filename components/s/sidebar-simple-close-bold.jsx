import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uihm9n3lg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uihm9n3lg"/>`,
		"fallback": "pullo:sidebar-simple-close-bold",
	});
}

export default Component;
