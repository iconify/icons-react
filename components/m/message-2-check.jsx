import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ivl5r6cnd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ivl5r6cnd"/>`,
		"fallback": "tabler:message-2-check",
	});
}

export default Component;
