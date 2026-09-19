import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/msplu1c3m.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="msplu1c3m"/>`,
		"fallback": "fa6-solid:plane-departure",
	});
}

export default Component;
