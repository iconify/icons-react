import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ca7cey2zf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ca7cey2zf"/>`,
		"fallback": "token:spool",
	});
}

export default Component;
