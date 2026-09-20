import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ruva7n5ow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ruva7n5ow"/>`,
		"fallback": "mynaui:letter-j",
	});
}

export default Component;
