import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bnj8bkbkl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bnj8bkbkl"/>`,
		"fallback": "token:mode",
	});
}

export default Component;
