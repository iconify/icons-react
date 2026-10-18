import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb5q3pedd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb5q3pedd"/>`,
		"fallback": "vadivam:utensils",
	});
}

export default Component;
