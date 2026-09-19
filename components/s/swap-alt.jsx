import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk7i8db5m.css';

const viewBox = {"width":432,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hk7i8db5m"/>`,
		"fallback": "zmdi:swap-alt",
	});
}

export default Component;
