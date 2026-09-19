import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r95lqe58b.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r95lqe58b"/>`,
		"fallback": "fa6-solid:tarp",
	});
}

export default Component;
