import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pgig8kbiz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pgig8kbiz"/>`,
		"fallback": "vadivam:user-lock",
	});
}

export default Component;
