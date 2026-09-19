import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9-n70bna.css';
import '../../css/t/tw2nlk24g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a9-n70bna"/><path class="tw2nlk24g"/>`,
		"fallback": "boxicons:message-notification-filled",
	});
}

export default Component;
