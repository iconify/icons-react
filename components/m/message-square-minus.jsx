import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3d4y-b_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3d4y-b_h"/>`,
		"fallback": "bxs:message-square-minus",
	});
}

export default Component;
