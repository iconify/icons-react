import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t36atxw_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t36atxw_y"/>`,
		"fallback": "mynaui:letter-l-waves-solid",
	});
}

export default Component;
