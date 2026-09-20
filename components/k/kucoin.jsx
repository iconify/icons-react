import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y_c89sjru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y_c89sjru"/>`,
		"fallback": "simple-icons:kucoin",
	});
}

export default Component;
