import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m01a237-r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m01a237-r"/>`,
		"fallback": "vadivam:orbit",
	});
}

export default Component;
