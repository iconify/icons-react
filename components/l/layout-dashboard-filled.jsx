import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv05c1bvd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xv05c1bvd"/>`,
		"fallback": "tabler:layout-dashboard-filled",
	});
}

export default Component;
