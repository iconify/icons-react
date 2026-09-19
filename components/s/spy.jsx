import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rfhjt5i0y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rfhjt5i0y"/>`,
		"fallback": "icons8:spy",
	});
}

export default Component;
