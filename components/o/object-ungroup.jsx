import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p2t0rrxjj.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p2t0rrxjj"/>`,
		"fallback": "fa6-regular:object-ungroup",
	});
}

export default Component;
