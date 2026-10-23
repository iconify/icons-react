import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ar8l_7htl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ar8l_7htl"/>`,
		"fallback": "vadivam:triangle-right",
	});
}

export default Component;
