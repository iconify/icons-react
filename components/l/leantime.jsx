import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixt72zwcd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixt72zwcd"/>`,
		"fallback": "thesvg-color:leantime",
	});
}

export default Component;
