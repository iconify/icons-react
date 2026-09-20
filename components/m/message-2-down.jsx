import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvh3ddcnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvh3ddcnl"/>`,
		"fallback": "tabler:message-2-down",
	});
}

export default Component;
