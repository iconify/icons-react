import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-c8q9x4n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-c8q9x4n"/>`,
		"fallback": "guidance:video",
	});
}

export default Component;
