import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xr3w4h4-i.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xr3w4h4-i"/>`,
		"fallback": "f7:text-badge-plus",
	});
}

export default Component;
