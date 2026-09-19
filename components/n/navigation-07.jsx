import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhf44wb0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhf44wb0o"/>`,
		"fallback": "hugeicons:navigation-07",
	});
}

export default Component;
