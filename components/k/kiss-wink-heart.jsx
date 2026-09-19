import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/db2a-lbcx.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="db2a-lbcx"/>`,
		"fallback": "fa7-solid:kiss-wink-heart",
	});
}

export default Component;
