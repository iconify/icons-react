import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8u5an_lr.css';

const viewBox = {"width":432,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8u5an_lr"/>`,
		"fallback": "zmdi:minus-circle",
	});
}

export default Component;
