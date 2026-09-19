import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skc7v0blp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skc7v0blp"/>`,
		"fallback": "hugeicons:view-sidebar-right",
	});
}

export default Component;
