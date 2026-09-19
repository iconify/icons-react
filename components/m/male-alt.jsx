import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w10-y0b4f.css';

const viewBox = {"width":152,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w10-y0b4f"/>`,
		"fallback": "zmdi:male-alt",
	});
}

export default Component;
