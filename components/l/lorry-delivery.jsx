import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zmqu1qs-x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zmqu1qs-x"/>`,
		"fallback": "mdi:lorry-delivery",
	});
}

export default Component;
