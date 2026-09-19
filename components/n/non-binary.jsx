import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/slfsep4xn.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="slfsep4xn"/>`,
		"fallback": "fa7-solid:non-binary",
	});
}

export default Component;
