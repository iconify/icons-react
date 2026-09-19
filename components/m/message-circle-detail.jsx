import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l5tcskb1o.css';
import '../../css/f/fu72iwgtz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l5tcskb1o"/><path class="fu72iwgtz"/>`,
		"fallback": "boxicons:message-circle-detail",
	});
}

export default Component;
