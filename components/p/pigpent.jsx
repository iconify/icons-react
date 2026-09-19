import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wlbwl1bux.css';

const viewBox = {"width":1026,"height":1028};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wlbwl1bux"/>`,
		"fallback": "whh:pigpent",
	});
}

export default Component;
