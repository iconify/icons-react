import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et211dbdf.css';
import '../../css/a/a9-n70bna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="et211dbdf"/><path class="a9-n70bna"/>`,
		"fallback": "boxicons:message-notification",
	});
}

export default Component;
