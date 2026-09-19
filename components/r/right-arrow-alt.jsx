import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/em2d4achx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="em2d4achx"/>`,
		"fallback": "bxs:right-arrow-alt",
	});
}

export default Component;
