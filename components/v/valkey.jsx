import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io10rlb_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io10rlb_c"/>`,
		"fallback": "selfhst:valkey",
	});
}

export default Component;
