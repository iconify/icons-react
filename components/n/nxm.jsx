import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zt3j4zv7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zt3j4zv7w"/>`,
		"fallback": "token:nxm",
	});
}

export default Component;
