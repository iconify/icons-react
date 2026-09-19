import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xm1g9rboa.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xm1g9rboa"/>`,
		"fallback": "fa-solid:water",
	});
}

export default Component;
