import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dlfh2fb9a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dlfh2fb9a"/>`,
		"fallback": "zondicons:pause-outline",
	});
}

export default Component;
