import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n7ymfdc9o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n7ymfdc9o"/>`,
		"fallback": "lucide:move-diagonal-2",
	});
}

export default Component;
