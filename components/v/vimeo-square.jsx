import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc-207mnp.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc-207mnp"/>`,
		"fallback": "fa6-brands:vimeo-square",
	});
}

export default Component;
