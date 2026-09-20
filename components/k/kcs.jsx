import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/callw3o4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="callw3o4q"/>`,
		"fallback": "token:kcs",
	});
}

export default Component;
