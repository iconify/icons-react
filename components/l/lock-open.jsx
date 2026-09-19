import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pu5i0ibdv.css';

const viewBox = {"width":344,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pu5i0ibdv"/>`,
		"fallback": "zmdi:lock-open",
	});
}

export default Component;
