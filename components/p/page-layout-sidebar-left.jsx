import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l8w928bpd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l8w928bpd"/>`,
		"fallback": "mdi:page-layout-sidebar-left",
	});
}

export default Component;
