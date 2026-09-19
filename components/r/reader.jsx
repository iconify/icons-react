import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p_mvaupgl.css';

const viewBox = {"width":472,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p_mvaupgl"/>`,
		"fallback": "zmdi:reader",
	});
}

export default Component;
