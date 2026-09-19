import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqhu8rbjs.css';

const viewBox = {"width":336,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqhu8rbjs"/>`,
		"fallback": "zmdi:stackoverflow",
	});
}

export default Component;
