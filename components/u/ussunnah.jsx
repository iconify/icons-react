import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cfx4nus2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cfx4nus2y"/>`,
		"fallback": "fa-brands:ussunnah",
	});
}

export default Component;
