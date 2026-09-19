import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvqdfg4fc.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvqdfg4fc"/><path class="fu72iwgtz"/>`,
		"fallback": "boxicons:message-circle-check",
	});
}

export default Component;
