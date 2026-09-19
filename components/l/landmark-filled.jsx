import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e77eg_m-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e77eg_m-e"/>`,
		"fallback": "boxicons:landmark-filled",
	});
}

export default Component;
