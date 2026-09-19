import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi-lltbwx.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi-lltbwx"/>`,
		"fallback": "fa6-solid:person-circle-check",
	});
}

export default Component;
