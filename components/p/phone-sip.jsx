import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hy3b7ss8t.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hy3b7ss8t"/>`,
		"fallback": "zmdi:phone-sip",
	});
}

export default Component;
