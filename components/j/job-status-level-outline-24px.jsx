import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vka6x62mp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vka6x62mp"/>`,
		"fallback": "healthicons:job-status-level-outline-24px",
	});
}

export default Component;
