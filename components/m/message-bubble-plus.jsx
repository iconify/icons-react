import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x2y2tbcyw.css';
import '../../css/a/aevd0o1gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x2y2tbcyw"/><path class="aevd0o1gl"/>`,
		"fallback": "boxicons:message-bubble-plus",
	});
}

export default Component;
