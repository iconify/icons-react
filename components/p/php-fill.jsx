import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ga4ciopbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ga4ciopbd"/>`,
		"fallback": "akar-icons:php-fill",
	});
}

export default Component;
