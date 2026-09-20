import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqr-xj2wz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cqr-xj2wz"/>`,
		"fallback": "mdi:star-off",
	});
}

export default Component;
