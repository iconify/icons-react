import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cc0ak45iy.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cc0ak45iy"/>`,
		"fallback": "f7:rectangle-split-3x1-fill",
	});
}

export default Component;
