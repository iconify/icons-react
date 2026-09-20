import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/evs7p7bus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="evs7p7bus"/>`,
		"fallback": "mdi:star-half-full",
	});
}

export default Component;
