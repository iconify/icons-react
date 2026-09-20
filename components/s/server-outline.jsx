import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e75k15bbs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e75k15bbs"/>`,
		"fallback": "solar:server-outline",
	});
}

export default Component;
