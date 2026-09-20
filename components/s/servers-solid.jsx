import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h6c_8lp1e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h6c_8lp1e"/>`,
		"fallback": "mynaui:servers-solid",
	});
}

export default Component;
