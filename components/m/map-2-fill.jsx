import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9kii2bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9kii2bdx"/>`,
		"fallback": "mingcute:map-2-fill",
	});
}

export default Component;
