import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0l14bbca.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0l14bbca"/>`,
		"fallback": "fa6-brands:vimeo-v",
	});
}

export default Component;
