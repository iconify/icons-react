import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e05octb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e05octb2i"/>`,
		"fallback": "mdi:rice",
	});
}

export default Component;
