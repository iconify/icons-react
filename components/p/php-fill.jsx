import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mj_w8biqg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mj_w8biqg"/>`,
		"fallback": "ri:php-fill",
	});
}

export default Component;
