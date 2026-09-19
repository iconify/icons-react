import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i14apub5e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i14apub5e"/>`,
		"fallback": "carbon:letter-mm",
	});
}

export default Component;
