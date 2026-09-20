import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iy8ogs3oi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iy8ogs3oi"/>`,
		"fallback": "majesticons:line-height-line",
	});
}

export default Component;
