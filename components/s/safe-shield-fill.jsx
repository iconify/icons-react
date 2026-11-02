import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b0umg59wh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b0umg59wh"/>`,
		"fallback": "mingcute:safe-shield-fill",
	});
}

export default Component;
