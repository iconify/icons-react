import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ds25a98oy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ds25a98oy"/>`,
		"fallback": "hugeicons:more-horizontal",
	});
}

export default Component;
