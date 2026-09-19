import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6z7a8-0d.css';
import '../../css/k/kebsqacsd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6z7a8-0d"/><path class="kebsqacsd"/>`,
		"fallback": "eva:mic-off-fill",
	});
}

export default Component;
