import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f2w5s5t3x.css';

const viewBox = {"width":432,"height":392};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f2w5s5t3x"/>`,
		"fallback": "zmdi:triangle-down",
	});
}

export default Component;
