import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-7og1lim.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-7og1lim"/>`,
		"fallback": "si:json-alt-4-duotone",
	});
}

export default Component;
