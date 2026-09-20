import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5u27ab7x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5u27ab7x"/>`,
		"fallback": "mdi:notifications",
	});
}

export default Component;
