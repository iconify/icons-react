import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h42isz-5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h42isz-5o"/>`,
		"fallback": "thesvg-color:sennheiser",
	});
}

export default Component;
