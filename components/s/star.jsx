import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ta3t5ry5x.css';

const viewBox = {"width":432,"height":408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ta3t5ry5x"/>`,
		"fallback": "zmdi:star",
	});
}

export default Component;
