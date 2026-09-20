import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dx15pnu6e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dx15pnu6e"/>`,
		"fallback": "mynaui:moon-star-solid",
	});
}

export default Component;
