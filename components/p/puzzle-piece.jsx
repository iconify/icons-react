import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlfijw3hs.css';

const viewBox = {"width":448,"height":456};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zlfijw3hs"/>`,
		"fallback": "zmdi:puzzle-piece",
	});
}

export default Component;
