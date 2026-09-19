import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zw5rx_s2r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zw5rx_s2r"/>`,
		"fallback": "cil:pen-alt",
	});
}

export default Component;
