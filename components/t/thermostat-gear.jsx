import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/potmh-1wa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="potmh-1wa"/>`,
		"fallback": "noviair:thermostat-gear",
	});
}

export default Component;
