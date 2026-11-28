import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ut3vv_b6y.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ut3vv_b6y"/>`,
		"fallback": "pullo:sidebar-simple-bottom-bold",
	});
}

export default Component;
