import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pl76tyb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pl76tyb9k"/>`,
		"fallback": "griddy-icons:sms",
	});
}

export default Component;
