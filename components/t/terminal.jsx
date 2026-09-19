import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xpbz69bit.css';

const viewBox = {"width":1664,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xpbz69bit"/>`,
		"fallback": "fa:terminal",
	});
}

export default Component;
