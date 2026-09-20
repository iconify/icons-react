import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfbi1bblv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfbi1bblv"/>`,
		"fallback": "keyline-icons:layout-dashboard",
	});
}

export default Component;
