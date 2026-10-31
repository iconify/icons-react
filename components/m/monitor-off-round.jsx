import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk3qy-tdr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk3qy-tdr"/>`,
		"fallback": "coolicons:monitor-off-round",
	});
}

export default Component;
