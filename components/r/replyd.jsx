import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sw_d-kbht.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sw_d-kbht"/>`,
		"fallback": "fa-brands:replyd",
	});
}

export default Component;
