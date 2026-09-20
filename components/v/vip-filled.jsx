import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ofoa5ib1z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ofoa5ib1z"/>`,
		"fallback": "lsicon:vip-filled",
	});
}

export default Component;
