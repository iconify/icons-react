import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yhh2g9tnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yhh2g9tnj"/>`,
		"fallback": "majesticons:remove-row",
	});
}

export default Component;
