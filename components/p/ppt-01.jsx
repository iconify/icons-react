import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/edm9wy9_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="edm9wy9_y"/>`,
		"fallback": "hugeicons:ppt-01",
	});
}

export default Component;
