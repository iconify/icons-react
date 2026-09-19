import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uzfgztf5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uzfgztf5l"/>`,
		"fallback": "boxicons:message-circle-dots-2-filled",
	});
}

export default Component;
