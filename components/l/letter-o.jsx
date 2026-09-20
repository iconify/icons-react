import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ywyjf0b4u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ywyjf0b4u"/>`,
		"fallback": "mynaui:letter-o",
	});
}

export default Component;
