import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n004zgb7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n004zgb7e"/>`,
		"fallback": "noviair:thermostat-arrow-down",
	});
}

export default Component;
