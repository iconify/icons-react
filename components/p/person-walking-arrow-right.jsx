import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-iqkzb1t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-iqkzb1t"/>`,
		"fallback": "fa6-solid:person-walking-arrow-right",
	});
}

export default Component;
