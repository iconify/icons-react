import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obive6x0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obive6x0l"/>`,
		"fallback": "hugeicons:line-squiggle",
	});
}

export default Component;
