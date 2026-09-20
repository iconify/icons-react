import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt08a3bkh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt08a3bkh"/>`,
		"fallback": "mdi:navigate-before",
	});
}

export default Component;
