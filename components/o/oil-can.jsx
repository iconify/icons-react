import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwn4_kbny.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwn4_kbny"/>`,
		"fallback": "fa6-solid:oil-can",
	});
}

export default Component;
