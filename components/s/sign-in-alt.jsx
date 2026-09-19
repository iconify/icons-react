import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p--sl88pf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p--sl88pf"/>`,
		"fallback": "fa7-solid:sign-in-alt",
	});
}

export default Component;
