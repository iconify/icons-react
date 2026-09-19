import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/itzhgkb2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="itzhgkb2i"/>`,
		"fallback": "mono-icons:text",
	});
}

export default Component;
