import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ldz9pm7fd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ldz9pm7fd"/>`,
		"fallback": "famicons:trail-sign",
	});
}

export default Component;
