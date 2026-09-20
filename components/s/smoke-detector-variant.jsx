import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-la4fbtf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r-la4fbtf"/>`,
		"fallback": "mdi:smoke-detector-variant",
	});
}

export default Component;
