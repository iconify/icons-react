import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv9bfyrst.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv9bfyrst"/>`,
		"fallback": "cbi:versuz-radio",
	});
}

export default Component;
