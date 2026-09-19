import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nv88c2lwy.css';
import '../../css/e/ezwpo0b0i.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nv88c2lwy"/><path class="ezwpo0b0i"/>`,
		"fallback": "carbon:vegetation-encroachment",
	});
}

export default Component;
