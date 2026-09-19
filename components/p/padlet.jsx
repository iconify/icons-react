import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t07miue5a.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t07miue5a"/>`,
		"fallback": "fa6-brands:padlet",
	});
}

export default Component;
