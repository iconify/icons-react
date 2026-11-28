import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqv6wq04x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqv6wq04x"/>`,
		"fallback": "noviair-light:store-clock",
	});
}

export default Component;
