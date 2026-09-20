import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hia084bjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hia084bjl"/>`,
		"fallback": "mdi:query-builder",
	});
}

export default Component;
