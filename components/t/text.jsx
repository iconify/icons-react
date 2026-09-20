import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkr0cdc7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkr0cdc7i"/>`,
		"fallback": "mdi:text",
	});
}

export default Component;
