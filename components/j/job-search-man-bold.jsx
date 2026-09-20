import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmrroccsk.css';
import '../../css/n/n3g_7jbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kmrroccsk"/><path class="n3g_7jbbt"/>`,
		"fallback": "streamline-ultimate:job-search-man-bold",
	});
}

export default Component;
