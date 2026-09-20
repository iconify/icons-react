import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/llk6ldgmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="llk6ldgmq"/>`,
		"fallback": "mdi:message-bookmark",
	});
}

export default Component;
