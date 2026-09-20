import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l30pv5y8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l30pv5y8m"/>`,
		"fallback": "subway:join-corner-arrow-4",
	});
}

export default Component;
