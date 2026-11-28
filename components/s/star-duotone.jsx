import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7bv47brn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary t7bv47brn"/>`,
		"fallback": "iconaut:star-duotone",
	});
}

export default Component;
