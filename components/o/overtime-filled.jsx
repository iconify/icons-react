import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-6d4u1ph.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n-6d4u1ph"/>`,
		"fallback": "lsicon:overtime-filled",
	});
}

export default Component;
