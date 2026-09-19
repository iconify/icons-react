import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ly3yfk2vt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ly3yfk2vt"/>`,
		"fallback": "fa7-solid:tablet-button",
	});
}

export default Component;
