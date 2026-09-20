import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojc1q_ioi.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojc1q_ioi"/>`,
		"fallback": "lsicon:shell-window-maximize-outline",
	});
}

export default Component;
