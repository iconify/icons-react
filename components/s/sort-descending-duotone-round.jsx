import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h5ez0fb_b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h5ez0fb_b"/>`,
		"fallback": "coolicons:sort-descending-duotone-round",
	});
}

export default Component;
