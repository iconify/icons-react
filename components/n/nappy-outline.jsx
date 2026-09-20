import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi9hynt1u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi9hynt1u"/>`,
		"fallback": "mdi:nappy-outline",
	});
}

export default Component;
