import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/prv40i33l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="prv40i33l"/>`,
		"fallback": "carbon:logo-medium",
	});
}

export default Component;
