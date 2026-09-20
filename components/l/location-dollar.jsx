import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccfbopbip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccfbopbip"/>`,
		"fallback": "tabler:location-dollar",
	});
}

export default Component;
