import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imxzj81sz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imxzj81sz"/>`,
		"fallback": "mdi:thermostat-box-auto",
	});
}

export default Component;
