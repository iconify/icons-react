import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n9azydbeh.css';

const viewBox = {"width":448,"height":480};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n9azydbeh"/>`,
		"fallback": "zmdi:network-off",
	});
}

export default Component;
