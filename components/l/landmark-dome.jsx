import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f7fg6-4qj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f7fg6-4qj"/>`,
		"fallback": "fa6-solid:landmark-dome",
	});
}

export default Component;
