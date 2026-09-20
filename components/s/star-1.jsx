import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa8kv5a7s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa8kv5a7s"/>`,
		"fallback": "subway:star-1",
	});
}

export default Component;
