import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi22qibhe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi22qibhe"/>`,
		"fallback": "mynaui:letter-e-diamond-solid",
	});
}

export default Component;
