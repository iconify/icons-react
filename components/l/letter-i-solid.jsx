import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az_f5k7uo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az_f5k7uo"/>`,
		"fallback": "mynaui:letter-i-solid",
	});
}

export default Component;
