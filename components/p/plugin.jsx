import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n_jc7nyzr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n_jc7nyzr"/>`,
		"fallback": "zondicons:plugin",
	});
}

export default Component;
