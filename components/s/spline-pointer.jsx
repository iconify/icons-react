import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j2f8oq7xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j2f8oq7xh"/>`,
		"fallback": "vadivam:spline-pointer",
	});
}

export default Component;
