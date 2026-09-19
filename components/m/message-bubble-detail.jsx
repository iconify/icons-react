import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j43vdgeku.css';
import '../../css/a/aevd0o1gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j43vdgeku"/><path class="aevd0o1gl"/>`,
		"fallback": "boxicons:message-bubble-detail",
	});
}

export default Component;
