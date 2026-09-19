import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xoam0_w_l.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xoam0_w_l"/>`,
		"fallback": "zmdi:local-cafe",
	});
}

export default Component;
