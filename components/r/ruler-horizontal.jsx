import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pf5gj7b8t.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pf5gj7b8t"/>`,
		"fallback": "fa6-solid:ruler-horizontal",
	});
}

export default Component;
