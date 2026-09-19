import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fz06e3bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fz06e3bkh"/>`,
		"fallback": "guidance:waiting-room",
	});
}

export default Component;
