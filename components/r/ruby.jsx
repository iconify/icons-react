import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsivv6qqw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nsivv6qqw"/>`,
		"fallback": "picon:ruby",
	});
}

export default Component;
