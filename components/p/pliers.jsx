import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/usa70rbvt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="usa70rbvt"/>`,
		"fallback": "mdi:pliers",
	});
}

export default Component;
