import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bg9i8bcxs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bg9i8bcxs"/>`,
		"fallback": "mdi:paper-airplane-variant-outline",
	});
}

export default Component;
