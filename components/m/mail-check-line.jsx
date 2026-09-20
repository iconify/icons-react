import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2beie8am.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2beie8am"/>`,
		"fallback": "ri:mail-check-line",
	});
}

export default Component;
