import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x4_eb6b1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x4_eb6b1p"/>`,
		"fallback": "mdi:panties",
	});
}

export default Component;
