import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bd_m2db3r.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bd_m2db3r"/>`,
		"fallback": "pullo:rock-tall-bold",
	});
}

export default Component;
