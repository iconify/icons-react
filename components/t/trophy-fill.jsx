import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zq1hqm0hv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zq1hqm0hv"/>`,
		"fallback": "ri:trophy-fill",
	});
}

export default Component;
