import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hdo9_1h6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hdo9_1h6o"/>`,
		"fallback": "mingcute:safe-flash-fill",
	});
}

export default Component;
