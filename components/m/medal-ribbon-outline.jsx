import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e817k-b3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e817k-b3o"/>`,
		"fallback": "solar:medal-ribbon-outline",
	});
}

export default Component;
