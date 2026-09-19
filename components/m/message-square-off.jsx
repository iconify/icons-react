import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw9kfbbgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw9kfbbgc"/>`,
		"fallback": "hugeicons:message-square-off",
	});
}

export default Component;
