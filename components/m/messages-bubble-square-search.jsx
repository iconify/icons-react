import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vu6c_ub0k.css';
import '../../css/c/c0644sbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vu6c_ub0k"/><path class="c0644sbod"/>`,
		"fallback": "streamline-freehand:messages-bubble-square-search",
	});
}

export default Component;
