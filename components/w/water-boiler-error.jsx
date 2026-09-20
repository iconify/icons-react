import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k-7em1b2h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k-7em1b2h"/>`,
		"fallback": "mdi:water-boiler-error",
	});
}

export default Component;
