import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td1t-5bcx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td1t-5bcx"/>`,
		"fallback": "healthicons:job-status-level-24px",
	});
}

export default Component;
