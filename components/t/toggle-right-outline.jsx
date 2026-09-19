import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nakc4kdbz.css';
import '../../css/q/qn6af91zr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nakc4kdbz"/><path class="qn6af91zr"/>`,
		"fallback": "eva:toggle-right-outline",
	});
}

export default Component;
