import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gicd92abc.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gicd92abc"/>`,
		"fallback": "zmdi:key",
	});
}

export default Component;
