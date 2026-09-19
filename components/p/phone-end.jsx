import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xc22_bkfi.css';

const viewBox = {"width":512,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xc22_bkfi"/>`,
		"fallback": "zmdi:phone-end",
	});
}

export default Component;
