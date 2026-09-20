import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_q4f_bly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_q4f_bly"/>`,
		"fallback": "mynaui:letter-i-diamond",
	});
}

export default Component;
