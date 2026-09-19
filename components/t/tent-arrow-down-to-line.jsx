import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdfuk_71m.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdfuk_71m"/>`,
		"fallback": "fa6-solid:tent-arrow-down-to-line",
	});
}

export default Component;
