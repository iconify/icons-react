import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzkun1bgf.css';
import '../../css/m/m5u32yv6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzkun1bgf"/><path class="m5u32yv6h"/>`,
		"fallback": "eos-icons:role-binding",
	});
}

export default Component;
