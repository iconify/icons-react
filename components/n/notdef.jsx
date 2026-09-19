import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nxu-7-bus.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nxu-7-bus"/>`,
		"fallback": "fa6-solid:notdef",
	});
}

export default Component;
