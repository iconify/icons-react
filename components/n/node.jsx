import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn-c7l4th.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn-c7l4th"/>`,
		"fallback": "fa6-brands:node",
	});
}

export default Component;
