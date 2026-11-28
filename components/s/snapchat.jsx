import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rn8fz8f3c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rn8fz8f3c"/>`,
		"fallback": "iconaut:snapchat",
	});
}

export default Component;
