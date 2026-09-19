import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvz33rbpi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvz33rbpi"/>`,
		"fallback": "fa6-solid:skull",
	});
}

export default Component;
