import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0r5uinwc.css';
import '../../css/u/u1-hezbed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0r5uinwc"/><path class="u1-hezbed"/>`,
		"fallback": "pixel:print",
	});
}

export default Component;
