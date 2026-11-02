import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s6t2bcbcm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s6t2bcbcm"/>`,
		"fallback": "mingcute:sidebar-left-close-fill",
	});
}

export default Component;
