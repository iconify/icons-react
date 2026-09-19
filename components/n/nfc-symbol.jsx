import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqwhcbc2e.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqwhcbc2e"/>`,
		"fallback": "fa7-brands:nfc-symbol",
	});
}

export default Component;
