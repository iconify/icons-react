import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p-o_vwbul.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p-o_vwbul"/>`,
		"fallback": "simple-line-icons:user-following",
	});
}

export default Component;
