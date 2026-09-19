import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v43-w8bka.css';

const viewBox = {"width":667.188,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v43-w8bka"/>`,
		"fallback": "brandico:jabber",
	});
}

export default Component;
