import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o89xpng8r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o89xpng8r"/>`,
		"fallback": "coolicons:owl-head-fill-round",
	});
}

export default Component;
