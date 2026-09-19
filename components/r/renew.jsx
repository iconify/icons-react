import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cz5xi_b1b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cz5xi_b1b"/>`,
		"fallback": "carbon:renew",
	});
}

export default Component;
