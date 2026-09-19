import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lef9jzxzs.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lef9jzxzs"/>`,
		"fallback": "carbon:no-ticket",
	});
}

export default Component;
