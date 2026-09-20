import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sinmak_xx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sinmak_xx"/>`,
		"fallback": "radix-icons:lock-closed",
	});
}

export default Component;
