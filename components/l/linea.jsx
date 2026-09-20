import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd_0f8xzd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd_0f8xzd"/>`,
		"fallback": "token:linea",
	});
}

export default Component;
