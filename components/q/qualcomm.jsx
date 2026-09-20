import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hi_ab-2lu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hi_ab-2lu"/>`,
		"fallback": "simple-icons:qualcomm",
	});
}

export default Component;
