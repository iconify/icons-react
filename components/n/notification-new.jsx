import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2pr_9bxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="v2pr_9bxs"/>`,
		"fallback": "griddy-icons:notification-new",
	});
}

export default Component;
