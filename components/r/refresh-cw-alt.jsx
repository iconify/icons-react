import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kysr_vuyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kysr_vuyw"/>`,
		"fallback": "boxicons:refresh-cw-alt",
	});
}

export default Component;
