import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9ptvdcsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="w9ptvdcsn"/>`,
		"fallback": "feather:square",
	});
}

export default Component;
