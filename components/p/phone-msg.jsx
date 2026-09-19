import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oprfdnb6e.css';

const viewBox = {"width":384,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oprfdnb6e"/>`,
		"fallback": "zmdi:phone-msg",
	});
}

export default Component;
