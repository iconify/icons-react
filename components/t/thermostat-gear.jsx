import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c42l-0b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c42l-0b2i"/>`,
		"fallback": "noviair-light:thermostat-gear",
	});
}

export default Component;
