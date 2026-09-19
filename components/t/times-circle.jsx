import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv2jm7uoi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv2jm7uoi"/>`,
		"fallback": "fa-regular:times-circle",
	});
}

export default Component;
