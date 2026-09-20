import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob7yn8b1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob7yn8b1e"/>`,
		"fallback": "tabler:ripple-up",
	});
}

export default Component;
