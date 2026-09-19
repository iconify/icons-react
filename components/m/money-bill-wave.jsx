import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym70cwagl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym70cwagl"/>`,
		"fallback": "fa-solid:money-bill-wave",
	});
}

export default Component;
