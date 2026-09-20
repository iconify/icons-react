import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efgr_ey8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="efgr_ey8o"/>`,
		"fallback": "lineicons:ubuntu",
	});
}

export default Component;
