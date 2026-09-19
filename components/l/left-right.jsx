import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cdccm0dcx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cdccm0dcx"/>`,
		"fallback": "fa6-solid:left-right",
	});
}

export default Component;
