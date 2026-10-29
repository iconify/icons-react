import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e62xkdhqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e62xkdhqd"/>`,
		"fallback": "withicons:layout-dashboard-solid",
	});
}

export default Component;
