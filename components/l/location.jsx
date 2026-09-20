import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtwew_qxx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rtwew_qxx"/>`,
		"fallback": "raphael:location",
	});
}

export default Component;
