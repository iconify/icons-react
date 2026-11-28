import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w1ws80bnv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary w1ws80bnv"/>`,
		"fallback": "iconaut:rose-duotone",
	});
}

export default Component;
