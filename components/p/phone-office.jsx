import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qh005ibev.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qh005ibev"/>`,
		"fallback": "wpf:phone-office",
	});
}

export default Component;
