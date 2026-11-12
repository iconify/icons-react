import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3rjk_xzj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3rjk_xzj"/>`,
		"fallback": "selfhst:review-board-dark",
	});
}

export default Component;
