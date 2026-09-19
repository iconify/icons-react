import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/by-oj7bvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="by-oj7bvc"/>`,
		"fallback": "fa6-brands:laravel",
	});
}

export default Component;
