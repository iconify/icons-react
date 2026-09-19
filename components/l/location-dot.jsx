import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sz6siedjv.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sz6siedjv"/>`,
		"fallback": "fa6-solid:location-dot",
	});
}

export default Component;
