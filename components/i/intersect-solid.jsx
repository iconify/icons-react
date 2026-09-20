import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mkfjl2n8m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mkfjl2n8m"/>`,
		"fallback": "mynaui:intersect-solid",
	});
}

export default Component;
