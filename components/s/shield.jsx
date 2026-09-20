import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wdp7e5d1o.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wdp7e5d1o"/>`,
		"fallback": "simple-line-icons:shield",
	});
}

export default Component;
