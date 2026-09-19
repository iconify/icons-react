import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qfkpbtgle.css';

const viewBox = {"width":376,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qfkpbtgle"/>`,
		"fallback": "zmdi:search-replace",
	});
}

export default Component;
