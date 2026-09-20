import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k32cw6e7o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k32cw6e7o"/>`,
		"fallback": "roentgen:trolleybus",
	});
}

export default Component;
