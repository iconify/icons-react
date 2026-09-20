import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efh2cwtrz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efh2cwtrz"/>`,
		"fallback": "ri:u-disk-fill",
	});
}

export default Component;
