import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrap8fsim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrap8fsim"/>`,
		"fallback": "thesvg-color:normalizedotcss",
	});
}

export default Component;
