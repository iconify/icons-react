import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqwqnlb_o.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqwqnlb_o"/>`,
		"fallback": "fa7-solid:user-injured",
	});
}

export default Component;
